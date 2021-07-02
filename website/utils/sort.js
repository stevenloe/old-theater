import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export function sortShows(shows) {
  const pastShows = [];
  const futureShows = [];

  shows.sort(function (a, b) {
    var c = new Date(a.date);
    var d = new Date(b.date);
    return c - d;
  });

  const today = dayjs.utc().startOf("day");

  shows.forEach((event) => {
    let EDate = dayjs.utc(event.date);

    if (today.isAfter(EDate)) {
      pastShows.unshift(event);
    } else {
      futureShows.push(event);
    }
  });

  return { futureShows, pastShows };
}



