//Config. data base
import mongoose from 'mongoose';
import config from 'config';

async function db(){
    const dbUri = config.get('dbUri') as string;
    try {
        await mongoose
        //useNewUrlParser and useUnifiedTopology just allows to not worry about any deprecation warnings
        .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,
            useFindAndModify: true })
        .then(() => {
            console.log(`DB connected to ${dbUri}`);            
        });
    } catch (err) {
        console.error(err);
        
    }
}

export default db;