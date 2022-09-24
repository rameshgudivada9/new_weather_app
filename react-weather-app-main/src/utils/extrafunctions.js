// Changing time to IST

export const timeChange = (sunrise) => {
  let dateObj = new Date(sunrise * 1000);
  let hours = dateObj.getUTCHours().toString().padStart(2, 0);
  let minutes = dateObj.getUTCMinutes().toString().padStart(2, 0);
  return `${hours}:${minutes}`;
};
