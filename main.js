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
Vue.component('modal', {
  template: `
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <slot></slot>
      </div>
    </div>
    <button class="modal-close is-large" @click= "$emit('close')" aria-label="close"></button>
  </div>
  `,
  methods: {
    showModal() {
      console.log('hello')
    }
  }
})

new Vue({
  el:'#root',
  data: {
    showModal: false
  }
})
