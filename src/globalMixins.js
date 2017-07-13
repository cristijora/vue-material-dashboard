const GlobalMixins = {
  install (Vue) {
    Vue.mixin({
      async mounted () {
        import('jquery').then(async ($) => {
          window.jQuery = window.$ = $
          await import('bootstrap-material-design')
          $.material.init()
        }
        )
      }
    })
  }
}

export default GlobalMixins
