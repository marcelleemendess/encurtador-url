"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
const db_1 = __importDefault(require("./db"));
const app = (0, express_1.default)();
const port = config_1.default.get('port');
//parse application/json - use bodyParser as a middleware bc in postman we're using json 
app.use(body_parser_1.default.json());
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
    (0, db_1.default)();
    (0, routes_1.default)(app);
});
