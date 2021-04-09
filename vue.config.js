module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // import global variables and mixin
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `
      }
    }
  }
}
