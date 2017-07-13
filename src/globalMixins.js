const GlobalMixins = {
  install (Vue) {
    Vue.mixin({
      mounted () {
        $.material.init()
      }
    })
  }
}

export default GlobalMixins
