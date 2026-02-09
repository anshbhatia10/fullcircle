import React, { useState } from 'react';

const Appointment: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '11:00 AM',
    service: 'Wellness Consultation (Dosha)',
    notes: ''
  });

  const [error, setError] = useState('');

  const timeSlots = [
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
    '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'date') {
      const day = new Date(value).getUTCDay();
      if (day === 0 || day === 6) {
        setError('Please select a weekday (Monday to Friday). We are closed on weekends.');
      } else {
        setError('');
      }
    }
    
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (error) {
      alert(error);
      return;
    }

    const phoneNumber = '916207221392';
    const message = `I want to request a booking for ${formData.service} on ${formData.date} at ${formData.time}.
Name: ${formData.name}
Email: ${formData.email}
Notes: ${formData.notes || 'None'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-cream min-h-screen py-32 flex items-center justify-center px-6">
      <div className="max-w-4xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 shadow-2xl rounded-[3rem] overflow-hidden border border-dark-brown/5">
        
        {/* Info Side */}
        <div className="bg-bronze-dark text-cream p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-accent-orange rounded-full opacity-20 filter blur-3xl"></div>
          
          <div>
            <h2 className="font-display text-4xl mb-6 uppercase tracking-tighter">Begin Your Journey</h2>
            <p className="font-serif italic text-lg opacity-80 mb-8 leading-relaxed">
              "You will always have a doctor who knows your full circle."
            </p>
            <div className="space-y-6 text-sm opacity-90 font-sans">
              <p><strong className="text-accent-orange uppercase tracking-widest text-[10px] block mb-1">Clinical:</strong> Expert diagnostics & treatment.</p>
              <p><strong className="text-accent-orange uppercase tracking-widest text-[10px] block mb-1">Spiritual:</strong> Healing the subtle bodies.</p>
              <p><strong className="text-accent-orange uppercase tracking-widest text-[10px] block mb-1">Aesthetic:</strong> Harmony in physical form.</p>
            </div>
          </div>

          <div className="mt-12 space-y-4">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-accent-orange mb-1 font-bold">Availability</p>
              <p className="text-sm font-sans">Mon - Fri: 11:00 AM - 08:00 PM</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-accent-orange mb-1 font-bold">Location</p>
              <p className="text-sm font-sans">Full Circle Clinic, New Delhi, India</p>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-white p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-dark-brown/40 mb-2 font-bold font-sans">Full Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b border-dark-brown/10 py-2 focus:outline-none focus:border-accent-orange bg-transparent transition-colors font-sans"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-dark-brown/40 mb-2 font-bold font-sans">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-dark-brown/10 py-2 focus:outline-none focus:border-accent-orange bg-transparent transition-colors font-sans"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-dark-brown/40 mb-2 font-bold font-sans">Service</label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border-b border-dark-brown/10 py-2 focus:outline-none focus:border-accent-orange bg-transparent transition-colors font-sans appearance-none"
              >
                <option>Wellness Consultation (Dosha)</option>
                <option>Acute/Medical Care</option>
                <option>Spiritual Healing / Reiki</option>
                <option>Palliative Support</option>
                <option>Aesthetic Consultation</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-dark-brown/40 mb-2 font-bold font-sans">Preferred Date</label>
                <input 
                  type="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full border-b py-2 focus:outline-none bg-transparent transition-colors font-sans ${error ? 'border-red-400 text-red-500' : 'border-dark-brown/10 focus:border-accent-orange'}`}
                  required
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-dark-brown/40 mb-2 font-bold font-sans">Preferred Time</label>
                <select 
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full border-b border-dark-brown/10 py-2 focus:outline-none focus:border-accent-orange bg-transparent transition-colors font-sans appearance-none"
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
              <label className="block text-[10px] uppercase tracking-widest text-dark-brown/40 mb-2 font-bold font-sans">Message (Optional)</label>
              <textarea 
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={2}
                className="w-full border-b border-dark-brown/10 py-2 focus:outline-none focus:border-accent-orange bg-transparent transition-colors resize-none font-sans"
              />
            </div>

            <button type="submit" className="w-full bg-dark-brown text-cream py-4 rounded-full font-bold uppercase tracking-widest hover:bg-accent-orange transition-all mt-4 text-[10px] shadow-xl transform hover:-translate-y-1">
              Request Booking on WhatsApp
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Appointment;