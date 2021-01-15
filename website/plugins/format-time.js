import Vue from "vue";

Vue.filter("formatTime", (date) => {
  const options = { hour: '2-digit', minute: '2-digit' }
  return new Date(date).toLocaleTimeString('en-US', options)
});


