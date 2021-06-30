import dayjs from "dayjs";

export function formatShowDate(date, type) {

  if (type === 'date') {
    return dayjs(date).format('dddd MMMM D, YYYY')
  } else {
    return dayjs(date).format(' h:mm A')
  }
}

