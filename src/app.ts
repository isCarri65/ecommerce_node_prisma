import { envs } from "./config/env";
import { createServer } from "./server";

const main = () => {
  console.log(envs.jwt.accessExpiration);
  createServer(envs);
};

(async () => {
  await main();
})();
