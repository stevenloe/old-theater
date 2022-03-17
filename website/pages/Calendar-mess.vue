<template>
  <div>
    <div class="ml-8 mr-8 md:mt-8">
      <div class="mb-8">
        <UiHeadline level="1">Calendar</UiHeadline>
        <CalendarMonth :shows="showsGrouped" />
      </div>
    </div>
  </div>
</template>

<script>
import CalendarMonth from "@/components/CalendarMonth";
import UiHeadline from "@/components/ui/UiHeadline";
import dayjs from "dayjs";

export default {
  async fetch() {
    let data2 = await this.$content("shows", { deep: true })
      .only(["eventDate", "title", "showType", "slug", "altDate", "dateTime"])
      // .sortBy("altDate", "asc")
      .fetch();

    // console.log("#####>>>>LIST IS.....", JSON.stringify(data2, null, 2));

  

      // data2 = addDate(data2);
      // this.showsGrouped = groupBy("date")(data2);

      // // console.log("RAW DATA", this.rawData);

    this.init(data2);

console.log("HI THER;slkdf;lskdfkfkldl  fkfk fkldkf  fk; fk fks; f;lksdf  ");

 
    
  },
  data() {
    return {
      rawData: null,
      showsGrouped: null,
    };
  },
  methods: {
    init(shows) {
      console.log("----- INIT ----", shows);
      let raw = this.addDate(shows);
      console.log("RAW", raw);

      let groupd = this.groupBy("newDate")(raw)

      console.log("GROUPED ", groupd);

      this.showsGrouped = groupd;
  

      // this.showsGrouped = this.groupBy("date")(this.rawData);
    },
    groupBy(key) {
      return function group(array) {
        return array.reduce((acc, obj) => {
          const property = obj[key];
          acc[property] = acc[property] || [];
          acc[property].push(obj);
          return acc;
        }, {});
      };
    },
    addDate(items) {
       items.forEach((element) => {
        console.log(element.dateTime);
        element.newDate = dayjs(element.dateTime).format("YYYY-MM-DD");
      });
      console.log("!@!@!@!@ !@ !@ !@ !@ ! @! @ !items", items);
      return items
    },
    munge(showData) {
      console.log("MUNGE");
    },
  },
  metaInfo: {
    title: "Calendar",
  },
  components: {
    CalendarMonth,
    UiHeadline
  },
  layout: "NewLayout",
};
</script>
