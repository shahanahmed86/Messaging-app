const fs = require('fs-extra');

const files = ['package-lock.json', 'yarn.lock', 'node_modules'];

files.forEach(file => {
  try {
    if (fs.existsSync(file)) {
      if (file.indexOf('lock') !== -1) {
        fs.unlinkSync(file);
      } else {
        fs.removeSync(file);
      }
      console.log(`${file} is deleted`);
    }
  } catch (error) {
    console.log('error', error);
  }
})
