const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
  await fs.writeFile(filename,fileContent)
};

module.exports = { writeFile };
