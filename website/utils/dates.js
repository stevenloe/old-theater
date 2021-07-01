import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export function formatShowDate(date, type) {

  if (type === 'date') {
    return dayjs(date).format('dddd MMMM D, YYYY')
  } else {
    return dayjs(date).format(' h:mm A')
  }
}


export function isFutureDate(event) {
  console.log(" IS FUTURE?? ");
  const today = dayjs.utc().startOf("day");
  const EDate = dayjs.utc(event);

  if (today.isAfter(EDate)) {
      console.log("event passed");
      return false
  } else {
    console.log("event future");
    return true
  }
}

