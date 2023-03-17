const fileSystem = require('fs')

fileSystem.readdir('./',function(error, filelist) {
  if (error) throw error;
  console.log(filelist);
})