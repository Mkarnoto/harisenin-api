"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const product_1 = require("./product");
const school_1 = require("./school");
const _routes = [
    ['/schools', school_1.SchoolRouter],
    ['/products', product_1.ProductRouter]
];
const routes = (app) => {
    _routes.forEach((route) => {
        const [url, router] = route;
        app.use(url, router);
    });
};
exports.routes = routes;
//# sourceMappingURL=index.js.map