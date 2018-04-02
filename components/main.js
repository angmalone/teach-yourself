Vue.component("task-list", {
  //whenever there is a template in a component it needs to have a single root element,
  //there's not a single root since we're using v-for since there are siblings.
  //to account for this, wrap the template in a div
  template: `<div>
            <task v-for="task in tasks"> {{ task.task }} </task>
        </div>`,

  data() {
    return {
      tasks: [
        { task: "Go to class", complete: true },
        { task: "Learn Vue", complete: true },
        { task: "Learn Ruby", complete: false }
      ]
    };
  }
});

Vue.component("task", {
  //slot acts as a placeholder for whatever the user inputs
  template: "<li><slot></slot></li>"
});

new Vue({
  el: "#root"
});
