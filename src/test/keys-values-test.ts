import { IFake, makeFakeData } from "../fake/makeFakeData";

const data: IFake = makeFakeData();
const keys = Object.keys(data);
const values = Object.values(data);
console.log('keys: ', keys);
console.log('values: ', values);