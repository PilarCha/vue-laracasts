Vue.component('task-list', {
  template: `
            <div>
              <task v-for="task in tasks">
                {{task.task}}
              </task>
            </div>`,
  data () {
    return {

      tasks: [
        {task: 'Go to the store', complete: true},

        {task: 'Kick the baby', complete: false},

        {task: 'Walk the dog', complete: true},

        {task: 'Go to the church', complete: false}
      ]
    }
  }
});
Vue.component('task', {
  template: '<li><slot></slot></li>'
});
new Vue({
  el:'#root'
})
