import knex from 'knex';
import dbConfig from '../../knexfile';

const connection = knex(dbConfig.development);

export default connection;
