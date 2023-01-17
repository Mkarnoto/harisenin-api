"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = require("express");
exports.ProductRouter = (0, express_1.Router)();
exports.ProductRouter.get('/', (req, res, next) => {
    res.status(200).send({
        status: true,
        statusCode: '200',
        data: [
            {
                id: 1,
                name: 'Shoes',
                price: 400000
            }
        ]
    });
});
//# sourceMappingURL=product.js.map