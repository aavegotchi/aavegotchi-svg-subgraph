import fs from "fs";
import path from "path";

const network = process.argv[2];
const configFile = require(`../config/${network}.json`);

const constants = `// This is an auto-generated file
export const AAVEGOTCHI_DIAMOND = "${configFile.contracts.diamond}";
`;

fs.writeFileSync(
  path.join(__dirname, "../src/constants.ts"),
  constants,
  "utf8"
);

console.log("Constants file generated successfully");
