export function FormatDateTime(isoDate) {
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  let hour = date.getHours();
  const minute = date.getMinutes().toString().padStart(2, "0");
  const second = date.getSeconds().toString().padStart(2, "0");
  const period = hour >= 12 ? "PM" : "AM";

  hour = hour % 12 || 12;

  return `${day}-${month}-${year} - ${hour}:${minute}:${second} ${period}`;
}
