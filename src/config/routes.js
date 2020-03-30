const fs = require("fs");
const path = require("path");
const modulePath = path.join(__dirname, "..", "modules");

//some magic stuff
module.exports = async app => {
  fs.readdir(modulePath, (err, folders) => {
    //just for remember
    console.log(`loading routes:`);

    folders.forEach(folder => {
      console.log(`🐎 route ${folder} was loaded`);
      require(`../modules/${folder}/controllers`)(app);
    });
  });
};
