import { useState } from 'react';
import { X, User, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Staff {
  id: string;
  name: string;
}

interface AppointmentPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onBook: (date: string, time: string, staff: string) => void;
}

function AppointmentPopup({ isOpen, onClose, onBook }: AppointmentPopupProps) {
  const [selectedDate, setSelectedDate] = useState<number>(10);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedStaff, setSelectedStaff] = useState<string>('chef-james');

  const staff: Staff[] = [
    { id: 'any', name: 'Any Available' },
    { id: 'chef-james', name: 'Chef James Mwangi' },
    { id: 'michael', name: 'Michael Kiprop' },
    { id: 'sarah-1', name: 'Sarah Achieng' },
    { id: 'marii', name: 'Marii Achieng' },
    { id: 'sarah-2', name: 'Sarah Achieng' },
  ];

  const timeSlots = [
    '09:00 am', '10:00 am', '11:00 am',
    '12:00 am', '01:00 pm', '02:00 pm',
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

  const handleBook = () => {
    const staffName = staff.find(s => s.id === selectedStaff)?.name || '';
    onBook(`December ${selectedDate}, 2025`, selectedTime, staffName);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6">
          <h2 className="text-xl font-bold text-gray-900">Select Appointment</h2>
          <button
            onClick={onClose}
            className="p-1 border-2 border-text-primary rounded-full transition-colors"
          >
            <X className="w-4 h-4 text-text-primary" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] gap-6 p-6">
            {/* Left Section - Calendar & Time */}
            <div className="space-y-6">
              {/* Calendar */}
              <div className="border-2 border-gray-200 rounded-xl p-4">
                <h3 className="text-base font-bold text-gray-900 text-center mb-4">
                  December 2025
                </h3>
                
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
                        onClick={() => !isPast && setSelectedDate(day)}
                        disabled={isPast}
                        className={`
                          aspect-square w-10 flex items-center justify-center text-sm font-medium
                          ${isPast ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100 hover:rounded-full'}
                          ${isSelected ? 'bg-[#2B3674] text-white hover:bg-[#2B3674] rounded-full' : 'rounded-lg'}
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
                <h3 className="text-sm font-bold text-gray-900 mb-3 mt-2">Select time</h3>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map(time => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`
                        py-2 px-3 rounded-lg text-sm font-medium transition-all
                        ${selectedTime === time
                          ? 'bg-[#E9EDF7] text-[#2B3674] border-2 border-[#2B3674]'
                          : 'bg-[#F4F7FE] text-gray-700 hover:bg-[#E9EDF7] border-2 border-transparent'
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section - Staff Selection */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-3 mt-2">Select Staff</h3>
              <div className="space-y-2">
                {staff.map(person => (
                  <button
                    key={person.id}
                    onClick={() => setSelectedStaff(person.id)}
                    className={`
                      w-full flex items-center gap-3 p-3 rounded-xl transition-all
                      ${selectedStaff === person.id
                        ? 'bg-[#E9EDF7] border-2 border-[#2B3674]'
                        : 'bg-white hover:bg-gray-50'
                      }
                    `}
                  >
                    {/* Avatar */}
                    <div className={`
                      w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
                      ${selectedStaff === person.id ? 'bg-[#2B3674]' : 'bg-gray-200'}
                    `}>
                      {person.id === 'any' ? (
                        <Users className={`w-5 h-5 ${selectedStaff === person.id ? 'text-white' : 'text-gray-600'}`} />
                      ) : (
                        <User className={`w-5 h-5 ${selectedStaff === person.id ? 'text-white' : 'text-gray-600'}`} />
                      )}
                    </div>
                    
                    <span className="text-sm font-medium text-gray-900 text-left">
                      {person.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t bg-white">
          <div className="flex items-center gap-4 w-full">
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1 py-3 text-sm font-semibold rounded-xl border-2 border-accent-darker2 text-accent-darker2 hover:bg-accent-darker2 hover:text-white"
            >
              Cancel
            </Button>
            <Button
              onClick={handleBook}
              disabled={!selectedTime}
              className={`
                flex-1 py-3 text-sm font-semibold rounded-xl
                ${!selectedTime
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-accent-darker2 hover:bg-accent-darker text-white'
                }
              `}
            >
              Book now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentPopup;
