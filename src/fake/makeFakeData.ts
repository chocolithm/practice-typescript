import Chance from 'chance';
import { IFake } from './IFake';

const c = new Chance;

export const makeFakeData = (): IFake => ({
  name: c.name(),
  email: c.email(),
  sentence: c.sentence(),
  profession: c.profession(),
  birthday: c.birthday()
});

export { IFake };