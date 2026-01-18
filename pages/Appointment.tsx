
import React, { useState, useMemo } from 'react';
import { Calendar as CalendarIcon, Clock, MessageCircle } from 'lucide-react';

const Appointment: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [selectedTime, setSelectedTime] = useState<string>('11:00');

  const WHATSAPP_NUMBER = '916207221392';

  // Generate time slots from 11 AM to 8 PM (20:00)
  const timeSlots = useMemo(() => {
    const slots = [];
    for (let hour = 11; hour < 20; hour++) {
      slots.push(`${hour}:00`);
      slots.push(`${hour}:30`);
    }
    slots.push('20:00');
    return slots;
  }, []);

  const isWeekend = (dateString: string) => {
    const day = new Date(dateString).getDay();
    return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
  };

  const handleWhatsAppClick = () => {
    const message = `Hello Full Circle, I would like to request an appointment for ${selectedDate} at ${selectedTime}.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-cream min-h-screen py-32 flex items-center justify-center px-6">
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 shadow-2xl rounded-[3rem] overflow-hidden border border-dark-brown/10">
        
        {/* Left Side: Information */}
        <div className="bg-dark-brown text-cream p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5">
            <CalendarIcon size={200} />
          </div>
          <div className="relative z-10">
            <h2 className="font-display text-5xl mb-6">Book Your Session</h2>
            <p className="font-serif italic text-xl text-accent-orange mb-8">
              "We close the gap between patients and doctors."
            </p>
            <div className="space-y-6 text-sm opacity-80">
              <div className="flex items-start gap-4">
                <Clock className="text-accent-orange mt-1 shrink-0" size={18} />
                <div>
                  <p className="font-bold uppercase tracking-widest text-[10px]">Availability</p>
                  <p>Monday — Friday</p>
                  <p>11:00 AM — 08:00 PM (IST)</p>
                </div>
              </div>
              <p className="text-xs leading-relaxed italic border-t border-white/10 pt-6">
                Appointments are confirmed via WhatsApp. Our team will verify your requested slot and provide pre-session guidelines.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Selection */}
        <div className="bg-white p-12">
          <div className="space-y-8">
            {/* Date Selection */}
            <div>
              <label className="block text-[10px] uppercase font-black tracking-widest text-dark-brown/40 mb-4 flex items-center gap-2">
                <CalendarIcon size={14} /> 1. Select Date
              </label>
              <input 
                type="date" 
                value={selectedDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full border-b-2 border-dark-brown/10 py-3 focus:outline-none focus:border-accent-orange bg-transparent transition-colors font-sans font-bold text-dark-brown"
              />
              {isWeekend(selectedDate) && (
                <p className="text-[10px] text-red-500 font-bold uppercase mt-2">Note: Weekend slots may vary. Weekdays preferred.</p>
              )}
            </div>

            {/* Time Selection */}
            <div>
              <label className="block text-[10px] uppercase font-black tracking-widest text-dark-brown/40 mb-4 flex items-center gap-2">
                <Clock size={14} /> 2. Select Time (IST)
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-48 overflow-y-auto pr-2 scrollbar-hide">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-2 rounded-xl text-[10px] font-bold transition-all border ${
                      selectedTime === time 
                        ? 'bg-dark-brown text-cream border-dark-brown' 
                        : 'bg-cream/30 text-dark-brown border-dark-brown/5 hover:border-accent-orange'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Request Button */}
            <button 
              onClick={handleWhatsAppClick}
              className="w-full bg-accent-orange text-white py-6 rounded-full font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:bg-dark-brown transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <MessageCircle size={18} />
              Request via WhatsApp
            </button>
            
            <p className="text-[9px] text-center text-dark-brown/30 uppercase font-bold tracking-widest">
              Instant Redirect to Business WhatsApp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
