Vue.component('coupon', {
  template: `
  <input placeholder="Please enter your coupon code" @blur="onCouponApplied">`,

  methods: {
    onCouponApplied() {
      this.$emit('applied')
    }
  }
})


new Vue({
  el: '#root',

  methods: {
    onCouponaApplied() {
      alert('coupon was applied')
    }
  }
});
