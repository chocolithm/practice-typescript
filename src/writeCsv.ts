import { writeCsvFormatFakeData } from "./fake";
import { getFileNameAndNumber } from "./utils/getFileNameAndNumber";

const [filename, numberOfFakeItems] = getFileNameAndNumber("data/fake", 1);
const csvFilename = `${filename}-${numberOfFakeItems}.csv`;
writeCsvFormatFakeData(csvFilename, numberOfFakeItems)
  .then(result => console.log(result))
  .catch((e: Error) => console.log(e.message));