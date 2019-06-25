const withCSS = require('@zeit/next-css')
module.exports=withCSS({
    cssLoaderOptions: {
        url: false
      },
    // cssModules:true,
    // cssLoaderOptions: {
    //   importLoaders: 1,
    //   localIdentName: "[local]___[hash:base64:5]",
    // }
})