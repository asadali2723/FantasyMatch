export const upcomingCricketMatches = [
  {
    id: '1',
    participants: ['India', 'Australia'],
    date: '2023-12-20',
    time: '15:00 - 17:00',
  },
  {
    id: '2',
    participants: ['England', 'South Africa'],
    date: '2023-12-20',
    time: '18:00 - 20:00',
  },
  {
    id: '3',
    participants: ['Pakistan', 'New Zealand'],
    date: '2023-12-22',
    time: '14:00 - 16:00',
  },
  {
    id: '4',
    participants: ['West Indies', 'Sri Lanka'],
    date: '2023-12-23',
    time: '17:00 - 19:00',
  },
  {
    id: '5',
    participants: ['Bangladesh', 'Afghanistan'],
    date: '2023-12-24',
    time: '12:00 - 14:00',
  },
  {
    id: '6',
    participants: ['Zimbabwe', 'Ireland'],
    date: '2023-12-25',
    time: '20:00 - 22:00',
  },
  {
    id: '7',
    participants: ['Netherlands', 'Scotland'],
    date: '2023-12-26',
    time: '16:00 - 18:00',
  },
  {
    id: '8',
    participants: ['Oman', 'UAE'],
    date: '2023-12-27',
    time: '19:00 - 21:00',
  },
  {
    id: '9',
    participants: ['Hong Kong', 'Namibia'],
    date: '2023-12-28',
    time: '13:00 - 15:00',
  },
  {
    id: '10',
    participants: ['Papua New Guinea', 'Kenya'],
    date: '2023-12-29',
    time: '21:00 - 23:00',
  },
  {
    id: '11',
    participants: ['Canada', 'Jersey'],
    date: '2023-12-30',
    time: '14:00 - 16:00',
  },
  {
    id: '12',
    participants: ['Nepal', 'Qatar'],
    date: '2023-12-31',
    time: '18:00 - 20:00',
  },
  {
    id: '13',
    participants: ['Saudi Arabia', 'Malaysia'],
    date: '2024-01-01',
    time: '16:00 - 18:00',
  },
  {
    id: '14',
    participants: ['Singapore', 'Thailand'],
    date: '2024-01-02',
    time: '19:00 - 21:00',
  },
  {
    id: '15',
    participants: ['Vanuatu', 'Fiji'],
    date: '2024-01-03',
    time: '15:00 - 17:00',
  },
  {
    id: '16',
    participants: ['Samoa', 'Tonga'],
    date: '2024-01-04',
    time: '20:00 - 22:00',
  },
  {
    id: '17',
    participants: ['Bermuda', 'Cayman Islands'],
    date: '2024-01-05',
    time: '14:00 - 16:00',
  },
  {
    id: '18',
    participants: ['Guernsey', 'Isle of Man'],
    date: '2024-01-06',
    time: '17:00 - 19:00',
  },
  {
    id: '19',
    participants: ['Jersey', 'Gibraltar'],
    date: '2024-01-07',
    time: '13:00 - 15:00',
  },
  {
    id: '20',
    participants: ['Maldives', 'Myanmar'],
    date: '2024-01-08',
    time: '16:00 - 18:00',
  },
];

// Function to convert data into a format suitable for SectionList
export const getSectionedData = () => {
  return upcomingCricketMatches.reduce((acc, match) => {
    const date = match.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(match);
    return acc;
  }, {});
};
export const getAllParticipants = () => {
  return upcomingCricketMatches.reduce((participants, match) => {
    participants.push(...match.participants);
    return participants;
  }, []);
};
