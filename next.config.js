const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
module.exports=withImages(withCSS({
    cssLoaderOptions: {
        url: false
      },
    // cssModules:true,
    // cssLoaderOptions: {
    //   importLoaders: 1,
    //   localIdentName: "[local]___[hash:base64:5]",
    // }
}))