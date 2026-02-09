import React, { useState } from 'react';

const Appointment: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    service: 'Wellness Consultation',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Appointment request sent! We will contact you shortly.");
  };

  return (
    <div className="bg-warm-cream min-h-screen py-16 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-0 shadow-2xl rounded-3xl overflow-hidden">
        
        {/* Info Side */}
        <div className="bg-deep-earth text-warm-cream p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-terra-cotta rounded-full opacity-20 filter blur-2xl"></div>
          
          <div>
            <h2 className="font-display text-4xl mb-6">Begin Your Journey</h2>
            <p className="font-serif italic text-lg opacity-80 mb-8">
              "You will always have a doctor who knows your full circle."
            </p>
            <div className="space-y-4 text-sm opacity-90">
              <p><strong>Clinical:</strong> Expert diagnostics & treatment.</p>
              <p><strong>Spiritual:</strong> Healing the subtle bodies.</p>
              <p><strong>Aesthetic:</strong> Harmony in physical form.</p>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-xs uppercase tracking-widest text-terra-cotta mb-2">Location</p>
            <p className="text-sm">Full Circle Clinic, New Delhi, India</p>
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-white p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">Full Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b border-soft-clay py-2 focus:outline-none focus:border-terra-cotta bg-transparent transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-soft-clay py-2 focus:outline-none focus:border-terra-cotta bg-transparent transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">Service</label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border-b border-soft-clay py-2 focus:outline-none focus:border-terra-cotta bg-transparent transition-colors"
              >
                <option>Wellness Consultation (Dosha)</option>
                <option>Acute/Medical Care</option>
                <option>Spiritual Healing / Reiki</option>
                <option>Palliative Support</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">Preferred Date</label>
              <input 
                type="date" 
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border-b border-soft-clay py-2 focus:outline-none focus:border-terra-cotta bg-transparent transition-colors"
                required
              />
            </div>

             <div>
              <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">Message (Optional)</label>
              <textarea 
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                className="w-full border-b border-soft-clay py-2 focus:outline-none focus:border-terra-cotta bg-transparent transition-colors resize-none"
              />
            </div>

            <button type="submit" className="w-full bg-terra-cotta text-white py-4 rounded-full font-bold uppercase tracking-widest hover:bg-deep-earth transition-colors mt-4">
              Confirm Booking
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Appointment;