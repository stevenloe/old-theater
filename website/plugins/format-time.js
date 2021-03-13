import Vue from "vue";

Vue.filter("formatTime", (date) => {
  const options = { timeStyle: 'short' }
  return new Date(date).toLocaleTimeString('en-US', options)
});


