"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Api is running');
});
app.use(productRoutes_1.default);
// app.get('/api/products', (req, res) => {
// })
app.listen(5000, () => {
    console.log('api is running ');
});
