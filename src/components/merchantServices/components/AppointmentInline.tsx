import { useState } from 'react';
import { User, Users } from 'lucide-react';

interface Staff {
  id: string;
  name: string;
}

interface AppointmentInlineProps {
  onBook: (date: string, time: string, staff: string) => void;
}

function AppointmentInline({ onBook }: AppointmentInlineProps) {
  const [selectedDate, setSelectedDate] = useState<number>(10);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedStaff, setSelectedStaff] = useState<string>('chef-james');

  const staff: Staff[] = [
    { id: 'any', name: 'Any Available' },
    { id: 'chef-james', name: 'Chef James Mwangi' },
    { id: 'michael', name: 'Michael Kiprop' },
    { id: 'sarah-1', name: 'Sarah Achieng' },
    { id: 'marii', name: 'Marii Achieng' },
  ];

  const timeSlots = [
    '09:00 am', '10:00 am', '11:00 am',
    '12:00 pm', '01:00 pm', '02:00 pm',
    '03:00 pm', '04:00 pm', '05:00 pm'
  ];

  const generateCalendarDays = () => {
    const days = [];
    const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    return { days, weekDays };
  };

  const { days, weekDays } = generateCalendarDays();

  // Auto-update booking when selections change
  const handleDateChange = (day: number) => {
    setSelectedDate(day);
    if (selectedTime && selectedStaff) {
      const staffName = staff.find(s => s.id === selectedStaff)?.name || '';
      onBook(`December ${day}, 2025`, selectedTime, staffName);
    }
  };

  const handleTimeChange = (time: string) => {
    setSelectedTime(time);
    const staffName = staff.find(s => s.id === selectedStaff)?.name || '';
    onBook(`December ${selectedDate}, 2025`, time, staffName);
  };

  const handleStaffChange = (staffId: string) => {
    setSelectedStaff(staffId);
    if (selectedTime) {
      const staffName = staff.find(s => s.id === staffId)?.name || '';
      onBook(`December ${selectedDate}, 2025`, selectedTime, staffName);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md w-full p-5 space-y-5">
      {/* Header */}
      <h2 className="text-lg font-bold text-gray-900">Book Appointment</h2>

      {/* Calendar */}
      <div className="border-2 border-gray-200 rounded-xl p-3">
        <h3 className="text-sm font-bold text-gray-900 mb-3 text-center">December 2025</h3>
        
        {/* Week Days Header */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekDays.map(day => (
            <div key={day} className="text-center text-xs font-medium text-gray-500 py-1">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">
          {days.map(day => {
            const isSelected = day === selectedDate;
            const isPast = day < 10;
            return (
              <button
                key={day}
                onClick={() => !isPast && handleDateChange(day)}
                disabled={isPast}
                className={`
                  aspect-square flex items-center justify-center text-sm font-medium transition-all
                  ${isPast ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100 hover:rounded-full'}
                  ${isSelected ? 'bg-accent-darker2 text-white hover:bg-accent-darker2 rounded-full w-9 h-9 mx-auto' : 'rounded-lg'}
                `}
              >
                {day.toString().padStart(2, '0')}
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Slots */}
      <div>
        <h3 className="text-sm font-bold text-gray-900 mb-3">Select time</h3>
        <div className="grid grid-cols-3 gap-2">
          {timeSlots.map(time => (
            <button
              key={time}
              onClick={() => handleTimeChange(time)}
              className={`
                py-2 px-2 rounded-lg text-xs font-medium transition-all
                ${selectedTime === time
                  ? 'bg-background-panel text-accent-darker2 border-2 border-accent-darker2'
                  : 'bg-[#F4F7FE] text-gray-700 hover:bg-background-panel border-2 border-transparent'
                }
              `}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Staff Selection */}
      <div>
        <h3 className="text-sm font-bold text-gray-900 mb-3">Select Staff</h3>
        <div className="space-y-2">
          {staff.map(person => (
            <button
              key={person.id}
              onClick={() => handleStaffChange(person.id)}
              className={`
                w-full flex items-center gap-3 p-2.5 rounded-xl transition-all
                ${selectedStaff === person.id
                  ? 'bg-background-panel border-2 border-accent-darker2'
                  : 'bg-white hover:bg-gray-50'
                }
              `}
            >
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                ${selectedStaff === person.id ? 'bg-accent-darker2' : 'bg-gray-200'}
              `}>
                {person.id === 'any' ? (
                  <Users className={`w-4 h-4 ${selectedStaff === person.id ? 'text-white' : 'text-gray-600'}`} />
                ) : (
                  <User className={`w-4 h-4 ${selectedStaff === person.id ? 'text-white' : 'text-gray-600'}`} />
                )}
              </div>
              
              <span className="text-xs font-medium text-gray-900 text-left">
                {person.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppointmentInline;
