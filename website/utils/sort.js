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

export function sortByDate(news) {
  news.sort(function (a, b) {
    var c = new Date(a.date);
    var d = new Date(b.date);
    return d - c;
  });

  return news
}

export function sortBoardMembers(boardList) {
  boardList.sort((a, b) => {
    let fa = a.role.toLowerCase(),
      fb = b.role.toLowerCase();
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
  });

return boardList
}


