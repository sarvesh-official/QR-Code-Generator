/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
console.log(
  "\x1b[32m%s\x1b[0m",
  `
____ ____    ____ ____ _  _ ____ ____ ____ ___ ____ ____ 
|  | |__/    | __ |___ |\\ | |___ |__/ |__|  |  |  | |__/ 
|_\\| |  \\    |__] |___ | \\| |___ |  \\ |  |  |  |__| |  \\ 
`
);

inquirer
  .prompt([{ message: "Type in your URL:", name: "URL" }])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The URL has been stored in URL.txt");
    });
    console.log("Your QR Code has been Generated Successfully");
  });
