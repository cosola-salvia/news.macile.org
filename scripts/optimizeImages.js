const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-Pngquant');


imagemin(
  ['app/assets/images/*.{png,jpg}'], {
    destination: 'app/assets/images',
    plugins: [
      imageminMozjpeg(),
      imageminPngquant({
          quality: [0.6, 0.8]
        })
    ]
}).then((files) => {
  console.log('JPG and PNG optimized', files);
});
