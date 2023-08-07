const fs = require("fs");

const izohli_lugat = JSON.parse(
	fs.readFileSync("./izohli_lug'at.json", "utf-8")
);
const words_data = JSON.parse(fs.readFileSync("./words_data.json", "utf-8"));

console.log(
	`izohli_lug'at: ${izohli_lugat.length} ta so'z izohlari bilan\no'zbekcha so'zlar: ${words_data.length} ta so'z`
);
