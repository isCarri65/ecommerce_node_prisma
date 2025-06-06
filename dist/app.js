"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("./config/env");
const server_1 = require("./server");
const main = () => {
    console.log(env_1.envs.jwt.accessExpiration);
    (0, server_1.createServer)(env_1.envs);
};
(async () => {
    await main();
})();
