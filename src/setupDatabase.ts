import mongoose from 'mongoose';
import Logger  from 'bunyan'; 
import {config} from './config';

const log:Logger = config.createLogger('setUP_database');

export default() => {
    const connect = () => {
        mongoose.set('strictQuery', true);
        mongoose.connect(`${config.DATABASE_URL}`)
            .then( () => {
                log.info('Successfully connected to database');
            })
            .catch((error) => {
                log.error ('error connecting to DB', error);
                return process.exit(1);
            }

            )

    };

        connect();
        mongoose.connection.on('disconnected', connect);
};