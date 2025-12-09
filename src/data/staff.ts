import type { StaffMember } from '../types';

export const staffMembers: StaffMember[] = [
  {
    id: 'chef-james-mwangi',
    name: 'Chef James Mwangi',
    providerId: 'kenyan-delights',
    services: ['nyama-choma-catering-20'],
  },
  {
    id: 'michael-kiprop',
    name: 'Michael Kiprop',
    providerId: 'kenyan-delights',
    services: ['nyama-choma-catering-20'],
  },
  {
    id: 'sarah-achieng',
    name: 'Sarah Achieng',
    providerId: 'kenyan-delights',
    services: ['nyama-choma-catering-20'],
  },
  {
    id: 'marii-achieng',
    name: 'Marii Achieng',
    providerId: 'kenyan-delights',
    services: ['nyama-choma-catering-20'],
  },
];

export const getStaffByProvider = (providerId: string): StaffMember[] => {
  return staffMembers.filter((staff) => staff.providerId === providerId);
};

export const getStaffByService = (serviceId: string): StaffMember[] => {
  return staffMembers.filter((staff) => staff.services.includes(serviceId));
};

export const getStaffById = (id: string): StaffMember | undefined => {
  return staffMembers.find((staff) => staff.id === id);
};

