import { AnyObjectSchema } from 'yup';
import { Request, Response, NextFunction } from 'express';

//Take the schema and validate
const validateResource = (resourceSchema: AnyObjectSchema) => async (req:Request, res: Response, next: NextFunction) => {
    try {
        await resourceSchema.validate({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        next();
    } catch (error) {
        return res.sendStatus(400).send(error);
    }
};

export default validateResource; 