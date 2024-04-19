"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const pool = promise_mysql_1.default.createPool({
    host: 'al-motors.cxkeo8im47tc.us-east-2.rds.amazonaws.com',
    user: 'root',
    password: 'AlMotors10',
    database: 'al_motors',
});
pool.getConnection()
    .then(connection => {
    pool.releaseConnection(connection);
    console.log('DB is Connected');
});
exports.default = pool;
