export function formatDate(isoDateString) {
  // Create a new Date object from the ISO 8601 date string
  const date = new Date(isoDateString);

  // Define an array of month names
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Extract the month, day, and year from the date object
  const monthIndex = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();

  // Format the day to include "st", "nd", "rd", or "th" suffix
  let daySuffix;
  if (day === 1 || day === 21 || day === 31) {
    daySuffix = 'st';
  } else if (day === 2 || day === 22) {
    daySuffix = 'nd';
  } else if (day === 3 || day === 23) {
    daySuffix = 'rd';
  } else {
    daySuffix = 'th';
  }

  // Construct the human-readable date string
  const formattedDate = `${months[monthIndex]} ${day}${daySuffix}, ${year}`;

  return formattedDate;
}
