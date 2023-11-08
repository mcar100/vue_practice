// vue.config.js

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/assets/scss/main.scss";
        `,
      },
    },
  },
};
