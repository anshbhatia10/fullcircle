import React, { useState } from 'react';
import { tinaField, useTina } from 'tinacms/dist/react';
import appointmentData from '../content/pages/appointment.json';

type AppointmentService = {
  name: string;
  wednesdayOnly?: boolean;
};

const parseDateLocal = (dateString: string) => {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, (month || 1) - 1, day || 1);
};

const Appointment: React.FC = () => {
  const { data } = useTina({
    query: `{
      appointment(relativePath: "appointment.json") {
        hero {
          title
          quote
          clinicalText
          spiritualText
          aestheticText
        }
        contact {
          headingHours
          hours
          specialHoursTitle
          specialHours
          locationHeading
          location
          whatsappNumber
        }
        form {
          serviceLabel
          timeLabel
          submitLabel
          weekdayOnlyError
          wednesdayOnlyError
        }
        services {
          name
          wednesdayOnly
        }
        timeSlots
      }
    }`,
    variables: { relativePath: 'appointment.json' },
    data: { appointment: appointmentData },
  });

  const { hero, contact, form, services, timeSlots } = data.appointment;
  const defaultService = services[0]?.name || '';
  const defaultTime = timeSlots[0] || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: defaultTime,
    service: defaultService,
    notes: ''
  });

  const [error, setError] = useState('');

  const getDateError = (dateValue: string, requiresWednesday: boolean) => {
    if (!dateValue) {
      return '';
    }

    const selectedDate = parseDateLocal(dateValue);
    const day = selectedDate.getDay();

    if (requiresWednesday && day !== 3) {
      return form.wednesdayOnlyError;
    }

    if (day === 0 || day === 6) {
      return form.weekdayOnlyError;
    }

    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const nextFormData = { ...formData, [name]: value };
    const nextService = services.find((service: AppointmentService) => service.name === nextFormData.service);
    const nextError = getDateError(nextFormData.date, Boolean(nextService?.wednesdayOnly));
    setError(nextError);
    setFormData(nextFormData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (error) {
      alert(error);
      return;
    }

    const phoneNumber = contact.whatsappNumber;
    const message = `I want to request a booking for ${formData.service} on ${formData.date} at ${formData.time}.
Name: ${formData.name}
Email: ${formData.email}
Notes: ${formData.notes || 'None'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-[#FAF3F0] min-h-screen py-32 flex items-center justify-center px-6">
      <div className="max-w-4xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 shadow-2xl rounded-[3rem] overflow-hidden border border-[#4A314D]/5">
        
        {/* Info Side */}
        <div className="bg-[#B5838D] text-white p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-white rounded-full opacity-10 filter blur-3xl"></div>
          
          <div>
            <h2 data-tina-field={tinaField(hero, 'title')} className="font-display text-4xl mb-6 uppercase tracking-tighter">{hero.title}</h2>
            <p data-tina-field={tinaField(hero, 'quote')} className="font-serif italic text-lg opacity-90 mb-8 leading-relaxed">
              "{hero.quote}"
            </p>
            <div className="space-y-6 text-sm opacity-90 font-sans">
              <p><strong className="text-white uppercase tracking-widest text-[10px] block mb-1">Clinical:</strong> <span data-tina-field={tinaField(hero, 'clinicalText')}>{hero.clinicalText}</span></p>
              <p><strong className="text-white uppercase tracking-widest text-[10px] block mb-1">Spiritual:</strong> <span data-tina-field={tinaField(hero, 'spiritualText')}>{hero.spiritualText}</span></p>
              <p><strong className="text-white uppercase tracking-widest text-[10px] block mb-1">Aesthetic:</strong> <span data-tina-field={tinaField(hero, 'aestheticText')}>{hero.aestheticText}</span></p>
            </div>
          </div>

          <div className="mt-12 space-y-4">
            <div>
              <p data-tina-field={tinaField(contact, 'headingHours')} className="text-[10px] uppercase tracking-widest text-[#FAF3F0] mb-1 font-bold opacity-60">{contact.headingHours}</p>
              <p data-tina-field={tinaField(contact, 'hours')} className="text-sm font-sans">{contact.hours}</p>
            </div>
            <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
              <p data-tina-field={tinaField(contact, 'specialHoursTitle')} className="text-[10px] uppercase tracking-widest text-white mb-1 font-bold">{contact.specialHoursTitle}</p>
              <p data-tina-field={tinaField(contact, 'specialHours')} className="text-sm font-sans">{contact.specialHours}</p>
            </div>
            <div>
              <p data-tina-field={tinaField(contact, 'locationHeading')} className="text-[10px] uppercase tracking-widest text-[#FAF3F0] mb-1 font-bold opacity-60">{contact.locationHeading}</p>
              <p data-tina-field={tinaField(contact, 'location')} className="text-sm font-sans">{contact.location}</p>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-white p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-[#4A314D]/40 mb-2 font-bold font-sans">Full Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b border-[#4A314D]/10 py-2 focus:outline-none focus:border-[#B5838D] bg-transparent transition-colors font-sans text-[#4A314D]"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-[#4A314D]/40 mb-2 font-bold font-sans">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-[#4A314D]/10 py-2 focus:outline-none focus:border-[#B5838D] bg-transparent transition-colors font-sans text-[#4A314D]"
                required
              />
            </div>

            <div>
              <label data-tina-field={tinaField(form, 'serviceLabel')} className="block text-[10px] uppercase tracking-widest text-[#4A314D]/40 mb-2 font-bold font-sans">{form.serviceLabel}</label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border-b border-[#4A314D]/10 py-2 focus:outline-none focus:border-[#B5838D] bg-transparent transition-colors font-sans appearance-none text-[#4A314D]"
              >
                {services.map((service: AppointmentService, index: number) => (
                  <option key={`${service.name}-${index}`} value={service.name}>{service.name}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#4A314D]/40 mb-2 font-bold font-sans">Preferred Date</label>
                <input 
                  type="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full border-b py-2 focus:outline-none bg-transparent transition-colors font-sans ${error ? 'border-red-400 text-red-500' : 'border-[#4A314D]/10 focus:border-[#B5838D] text-[#4A314D]'}`}
                  required
                />
              </div>
              <div>
                <label data-tina-field={tinaField(form, 'timeLabel')} className="block text-[10px] uppercase tracking-widest text-[#4A314D]/40 mb-2 font-bold font-sans">{form.timeLabel}</label>
                <select 
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full border-b border-[#4A314D]/10 py-2 focus:outline-none focus:border-[#B5838D] bg-transparent transition-colors font-sans appearance-none text-[#4A314D]"
                  required
                >
                  {timeSlots.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>

            {error && <p className="text-[10px] text-red-500 font-bold uppercase tracking-tight">{error}</p>}

             <div>
              <label className="block text-[10px] uppercase tracking-widest text-[#4A314D]/40 mb-2 font-bold font-sans">Message (Optional)</label>
              <textarea 
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={2}
                className="w-full border-b border-[#4A314D]/10 py-2 focus:outline-none focus:border-[#B5838D] bg-transparent transition-colors resize-none font-sans text-[#4A314D]"
              />
            </div>

            <button type="submit" className="w-full bg-[#4A314D] text-white py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#8E5D52] transition-all mt-4 text-[10px] shadow-xl transform hover:-translate-y-1">
              <span data-tina-field={tinaField(form, 'submitLabel')}>{form.submitLabel}</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Appointment;
