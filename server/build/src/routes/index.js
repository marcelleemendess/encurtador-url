"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shortUrl_controller_1 = require("../controller/shortUrl.controller");
const validateResource_1 = __importDefault(require("../middleware/validateResource"));
const createShortUrl_schema_1 = __importDefault(require("../schemas/createShortUrl.schema"));
function routes(app) {
    app.get('/check', (req, res) => {
        return res.send('App is working');
    });
    //add the middleware validateResource
    app.post('/api/url', (0, validateResource_1.default)(createShortUrl_schema_1.default), shortUrl_controller_1.createShortUrl);
    //hit the url and redirect to the destination
    app.get('/:shortId', shortUrl_controller_1.handleRedirect);
    app.get('/api/url/:shortId', shortUrl_controller_1.getShortUrl);
    app.get('/api/analytics', shortUrl_controller_1.getAnalytics);
}
exports.default = routes;
