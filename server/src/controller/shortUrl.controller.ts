import { Request, Response } from 'express';
import shortUrl from '../models/shortUrl.model';
import analytics from '../models/analytics.model';

export async function createShortUrl(req: Request, res: Response){
    // Get the destination from the request body
    const { destination } = req.body;
    //Create a shortUrl
    const newUrl = await shortUrl.create({ destination });
    // Return the shortUrl
    return res.send(newUrl);
}

export async function handleRedirect(req: Request, res: Response){
    const { shortId } = req.params;
    //query database for the destination
    const short = await shortUrl.findOne({shortId}).lean();

    if(!short) {
        return res.sendStatus(404); 
    }
    //import the model analytics
    analytics.create({ shortUrl: short._id });

    return res.redirect(short.destination);
}

//handle to fetch analytics
export async function getAnalytics(req: Request, res: Response){
    const data = await analytics.find({}).lean();
  
    return res.send(data);
  }

export async function getShortUrl(req: Request, res: Response) {
    const { shortId } = req.params;
    const short = await shortUrl.findOne({ shortId }).lean();

    if (!short) {
        return res.sendStatus(404);
    }

    return res.json(short);
}