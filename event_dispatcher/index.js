window.Event = new Vue();

Vue.component('coupon', {
  template: `
    <input placeholder="Enter your Coupon Code" @blur="onCouponApplied">
  `,
  methods: {
    onCouponApplied() {
      Event.$emit('applied')
    }
  }
})


new Vue ({
  el: '#root',
  data: {
    isApplied: false
  },
  created() {
    Event.$on('applied', () => alert('Handling it'))
  }
})
