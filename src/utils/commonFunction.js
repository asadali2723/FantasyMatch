import moment from 'moment';

export const formatDate = inputDate => {
  const options = {day: '2-digit', month: 'short', year: 'numeric'};
  const formattedDate = new Date(inputDate).toLocaleDateString(
    'en-GB',
    options,
  );
  return formattedDate;
};
export const formatTime = inputTime => {
  const [startHour, startMinute] = inputTime.split(' - ')[0].split(':');
  const startTime = `${parseInt(startHour, 10) % 12 || 12}:${startMinute} ${
    parseInt(startHour, 10) >= 12 ? 'PM' : 'AM'
  }`;

  const [endHour, endMinute] = inputTime.split(' - ')[1].split(':');
  const endTime = `${parseInt(endHour, 10) % 12 || 12}:${endMinute} ${
    parseInt(endHour, 10) >= 12 ? 'PM' : 'AM'
  }`;

  return `${startTime} - ${endTime}`;
};
export const formatTimeUpdated = inputTime => {
  // Check if the inputTime has the expected format
  if (!inputTime || !inputTime.includes(' - ')) {
    // Return a default value or handle the error as needed
    return 'Invalid Time Format';
  }

  const [startHour, startMinute] = inputTime.split(' - ')[0].split(':');
  const startTime = `${parseInt(startHour, 10) % 12 || 12}:${startMinute} ${
    parseInt(startHour, 10) >= 12 ? 'PM' : 'AM'
  }`;

  const [endHour, endMinute] = inputTime.split(' - ')[1].split(':');
  const endTime = `${parseInt(endHour, 10) % 12 || 12}:${endMinute} ${
    parseInt(endHour, 10) >= 12 ? 'PM' : 'AM'
  }`;

  return `${startTime} - ${endTime}`;
};

export const convertToYYYYMMDD = dateString => {
  const months = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
  };

  const currentYear = new Date().getFullYear();
  const [day, month, dayNumber] = dateString.split(' ');
  const monthNumber = months[month];

  return `${currentYear}-${monthNumber}-${dayNumber}`;
};
export const doTimeRangesOverlap = (range1, range2) => {
  const [start1, end1] = range1
    .split(' - ')
    .map(time => time.replace(/\u202F/g, ''));
  const [start2, end2] = range2
    .split(' - ')
    .map(time => time.replace(/\u202F/g, ''));

  const startTime1 = moment(`2000-01-01T${start1}`, 'YYYY-MM-DDTHH:mm A');
  const endTime1 = moment(`2000-01-01T${end1}`, 'YYYY-MM-DDTHH:mm A');
  const startTime2 = moment(`2000-01-01T${start2}`, 'YYYY-MM-DDTHH:mm A');
  const endTime2 = moment(`2000-01-01T${end2}`, 'YYYY-MM-DDTHH:mm A');

  return startTime1.isBefore(endTime2) && endTime1.isAfter(startTime2);
};
export const formattedDateFunc = date => {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });
};

export const formatTimeValue = timeString => {
  const [hours, minutes] = timeString.split(':');
  const formattedHours = (parseInt(hours, 10) % 12 || 12).toString();
  return `${formattedHours}:${minutes}`;
};
export const convertTimeFormat = timeString => {
  // Assuming the input format is "8:00 AM - 10:00 AM"
  const [start, end] = timeString.split(' - ');
  const formatTimeS = time => {
    const [hours, minutes, meridiem] = time.split(/[:\s\u202F]+/);
    const formattedHours =
      meridiem === 'PM' && hours !== '12'
        ? parseInt(hours, 10) + 12
        : parseInt(hours, 10);
    return `${formattedHours}:${minutes}`;
  };

  const formattedStartTime = formatTimeS(start);
  const formattedEndTime = formatTimeS(end);

  return `${formattedStartTime} - ${formattedEndTime}`;
};
