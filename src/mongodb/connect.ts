import { MongoClient } from 'mongodb';

export const connect = (mongourl: string = 'mongodb://localhost:27017') => {
  return MongoClient.connect(mongourl);
}