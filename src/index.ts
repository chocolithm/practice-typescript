import { connect } from './mongodb/connect';
import { runServer } from './runServer'

connect()
  .then(async (connection) => {
    const db = await connection.db('typescript');
    return db;
  })
  .then(runServer)
  .catch((e: Error) => console.log(e.message));