"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolRouter = void 0;
const express_1 = require("express");
exports.SchoolRouter = (0, express_1.Router)();
exports.SchoolRouter.get('/school', (req, res, next) => {
    res.status(200).send({ status: '200' });
});
//# sourceMappingURL=school.js.map