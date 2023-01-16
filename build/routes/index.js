"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const school_1 = require("./school");
const _routes = [['/school', school_1.SchoolRouter]];
const routes = (app) => {
    _routes.forEach((route) => {
        const [url, router] = route;
        app.use(url, router);
    });
};
exports.routes = routes;
//# sourceMappingURL=index.js.map