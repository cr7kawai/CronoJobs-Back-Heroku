"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const hola_controller_1 = __importDefault(require("../controller/hola.controller"));
class HolaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', auth_middleware_1.verifyToken, hola_controller_1.default.saludo);
    }
}
const holaRoutes = new HolaRoutes();
exports.default = holaRoutes.router;
