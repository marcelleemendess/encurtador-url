import mongoose, { Document } from 'mongoose';
import { customAlphabet } from 'nanoid';

//create an instance of nano id, the second argument is the number of characters on the id  
const nanoid = customAlphabet('abcdefghijklmnopqrstuv0987654321', 6);

export interface ShortURL extends Document {
  shortId: string;
  //the long url
  destination: string;
}

const schema = new mongoose.Schema({
  shortId: {
    type: String,
    unique: true,
    required: true,
    default: () => nanoid(),
  },
  destination: { type: String, required: true },
});

//mongoose model ---------- short url interface 
const shortUrl = mongoose.model<ShortURL>('shortUrl', schema);

export default shortUrl;