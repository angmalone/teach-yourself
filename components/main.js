Vue.component("task", {
  //slot acts as a placeholder for whatever the user inputs
  template: "<li><slot></slot></li>"
});

//YOU HAVE TO SET DATA EQUAL TO A FUNCTION THAT RETURNS AN OBJECT

new Vue({
  el: "#root"
});
