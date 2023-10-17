const path = require("path");
const fs = require("fs");

// console.log("File name:", path.basename(__filename));
// console.log("Catalog name:", path.dirname(__filename));
// console.log("Extension:", path.extname(__filename));

// fs.mkdir(path.join(__dirname, "tmp"), function (err) {
//   if (err) {
//     console.error(err);
//   }
//   console.log("Папка создана");
// });

const filePath = path.join(__dirname, "tmp", "2.txt");
console.log(filePath);
fs.appendFile(filePath, "\nSomething wrong in your file", function (err) {
  if (err) {
    console.error(err);
  }
  console.log("Папка создана");
});

fs.readFile(filePath, "UTF-8", (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});
