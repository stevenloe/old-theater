

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export function sortShows(shows) {
  const pastShows = [];
  const futureShows = [];

  shows.sort(function (a, b) {
    var c = new Date(a.date);
    var d = new Date(b.date);
    return d - c;
  });

  const today = dayjs.utc().startOf("day");


  shows.forEach((event) => {
    // console.log(event);
    let EDate = dayjs.utc(event.date);
    // console.log(
    //   "eDate",
    //   event.title,
    //   "date",
    //   EDate.format("dddd, MMMM D h:mm A")
    // );
    if (today.isAfter(EDate)) {
      // console.log("past event", event.title);
      pastShows.push(event);
      // console.log("Added to Past SHows", pastShows);
    } else {
      // console.log("future event", event.title);
      futureShows.push(event);
    }
  });

  return { futureShows, pastShows };

  }



