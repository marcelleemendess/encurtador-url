import express from 'express';
import config from 'config';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';
import db from './db';

const app = express();

app.use(
    cors({
        origin: config.get('corsOrigin'),
    })
);

const port = config.get('port');

//parse application/json - use bodyParser as a middleware bc in postman we're using json 
app.use(bodyParser.json());

app.listen(port, () => {
    console.log( `App listening at http://localhost:${port}`);
    db();
    routes(app);    
});