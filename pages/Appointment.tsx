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
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', 
    '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', 
    '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', 
    '07:00 PM', '07:30 PM', '08:00 PM'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'date') {
      const selectedDate = new Date(value);
      const day = selectedDate.getUTCDay();
      
      if (formData.service.includes('Dr. NK Sharma') && day !== 3) {
        setError('Dr. NK Sharma is only available on Wednesdays. Please select a Wednesday.');
      } else if (day === 0 || day === 6) {
        setError('Please select a weekday (Monday to Friday). We are closed on weekends.');
      } else {
        setError('');
      }
    }

    if (name === 'service') {
      if (value.includes('Dr. NK Sharma') && formData.date) {
        const day = new Date(formData.date).getUTCDay();
        if (day !== 3) {
          setError('Dr. NK Sharma is only available on Wednesdays. Please select a Wednesday.');
        } else {
          setError('');
        }
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

    const phoneNumber = '919910930108';
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
            <h2 className="font-display text-4xl mb-6 uppercase tracking-tighter">Begin Your Journey</h2>
            <p className="font-serif italic text-lg opacity-90 mb-8 leading-relaxed">
              "You will always have a doctor who knows your full circle."
            </p>
            <div className="space-y-6 text-sm opacity-90 font-sans">
              <p><strong className="text-white uppercase tracking-widest text-[10px] block mb-1">Clinical:</strong> Expert diagnostics & treatment.</p>
              <p><strong className="text-white uppercase tracking-widest text-[10px] block mb-1">Spiritual:</strong> Healing the subtle bodies.</p>
              <p><strong className="text-white uppercase tracking-widest text-[10px] block mb-1">Aesthetic:</strong> Harmony in physical form.</p>
            </div>
          </div>

          <div className="mt-12 space-y-4">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#FAF3F0] mb-1 font-bold opacity-60">General Hours</p>
              <p className="text-sm font-sans">Mon - Fri: 11:00 AM - 08:00 PM</p>
            </div>
            <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
              <p className="text-[10px] uppercase tracking-widest text-white mb-1 font-bold">Dr. NK Sharma (Wednesdays)</p>
              <p className="text-sm font-sans">10:00 AM - 07:00 PM</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#FAF3F0] mb-1 font-bold opacity-60">Location</p>
              <p className="text-sm font-sans">Gurgaon Clinic, India</p>
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
              <label className="block text-[10px] uppercase tracking-widest text-[#4A314D]/40 mb-2 font-bold font-sans">Service</label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border-b border-[#4A314D]/10 py-2 focus:outline-none focus:border-[#B5838D] bg-transparent transition-colors font-sans appearance-none text-[#4A314D]"
              >
                <option>Wellness Consultation (Dosha)</option>
                <option>Acute/Medical Care</option>
                <option>Spiritual Healing / Reiki (Dr. NK Sharma - Wed Only)</option>
                <option>Naturopathy Consultation (Dr. NK Sharma - Wed Only)</option>
                <option>Palliative Support</option>
                <option>Aesthetic Consultation</option>
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
                <label className="block text-[10px] uppercase tracking-widest text-[#4A314D]/40 mb-2 font-bold font-sans">Preferred Time</label>
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
              Request Booking on WhatsApp
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Appointment;
