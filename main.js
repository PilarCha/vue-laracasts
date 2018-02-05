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
Vue.component('bulma-message', {
  props: ['title', 'body'],
  data () {
    return {
      isVisible: true
    }
  },
  template: `
  <article class="message" v-show="isVisible">
    <div class="message-header">
      <p>{{title}}</p>
      <button class="delete" aria-label="delete" @click="isVisible = false"></button>
    </div>
    <div class="message-body">
      {{body}}
    </div>
  </article>

  `
})
new Vue({
  el:'#root'
})
