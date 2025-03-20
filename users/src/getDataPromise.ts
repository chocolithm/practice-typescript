import { IUser } from './IUser';

type getDataPromiseCallback = (a: IUser[]) => void;

export const getDataPromise = (fn: getDataPromiseCallback) => (skip: number, limit: number) => {
  fetch(`http://localhost:4000/users/${skip}/${limit}`)
    .then(res => res.json())
    .then(fn)
}