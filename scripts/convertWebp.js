const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

imagemin(
  ['app/assets/images/*.{png,jpg}'], {
    destination: 'app/assets/images',
    plugins: [
      imageminWebp({
        quality: 65
      })
    ]
  }).then((files) => {
  console.log('Files Converted to Webp', files);
});
