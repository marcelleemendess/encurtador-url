import { Express, Request, Response } from 'express';
import { 
    createShortUrl, 
    handleRedirect, 
    getAnalytics,
    getShortUrl 
} from '../controller/shortUrl.controller';
import validateResourse from '../middleware/validateResource';
import shortUrlSchema from '../schemas/createShortUrl.schema';

function routes(app: Express){  
    app.get('/check', (req: Request, res: Response) => {
        return res.send('App is working');
    });
    //add the middleware validateResource
    app.post('/api/url',validateResourse(shortUrlSchema), createShortUrl);
    //hit the url and redirect to the destination
    app.get('/:shortId', handleRedirect)

    app.get('/api/url/:shortId', getShortUrl);

    app.get('/api/analytics', getAnalytics);
}

export default routes;