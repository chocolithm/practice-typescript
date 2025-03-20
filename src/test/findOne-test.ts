import { connect } from '../mongodb/connect';

const findOneTest = async () => {
  let connection, cursor;

  try {
    connection = await connect();
    const db = await connection.db('typescript');
    const personsCollection = db.collection('persons');

    cursor = personsCollection.find({});
    const foundPersons = await cursor.toArray();
    
    const _id = foundPersons[0]._id;
    const result = await personsCollection.findOne({_id});
    console.log(result);
  } catch (e) {
    console.log(e.message);
  } finally {
    connection.close();
  }
}

findOneTest();