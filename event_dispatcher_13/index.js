Vue.component('coupon', {
  //on blur activates method onCouponApplied
  template: `
  <input placeholder="Please enter your coupon code" @blur="onCouponApplied">`,

  methods: {
    //this emits back to the html @applied on the coupon component
    onCouponApplied() {
      this.$emit('applied')
    }
  }
})


new Vue({
  el: '#root',

  data: {
    couponApplied: false
  },

  methods: {
    // this changes the boolean from false to true. Which activates the v-if
    onCouponaApplied() {
      this.couponApplied=true;
    }
  }
});
