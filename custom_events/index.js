Vue.component('coupon', {
  template: `
    <input placeholder="Enter your COupon Code" @blur="onCouponApplied">
  `,
  methods: {
    onCouponApplied() {
      this.$emit('applied')
    }
  }
})
new Vue ({
  el: '#root',
  data: {
    isApplied: false
  },
  methods: {
    onCouponApplied () {
      this.isApplied = true
    }
  }
})
