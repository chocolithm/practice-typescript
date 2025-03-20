import { connect } from '../mongodb/connect';

const makeCollectionsTest = async () => {
  let connection;
  try {
    connection = await connect();
    const db = await connection.db('typescript');
    const personsCollection = db.collection('persons');
    const addressesCollection = db.collection('addresses');
    console.log(personsCollection, addressesCollection);
  } catch (e) {
    console.log(e.message);
  } finally {
    connection.close();
  }
}

makeCollectionsTest();