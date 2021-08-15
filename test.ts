import { Buffer } from "./deps.ts";
import { IPv6 } from "./IPAddress.ts";

const decoded = new IPv6();
const data = Buffer.from([32, 1, 72, 96, 72, 96, 0, 0, 0, 0, 0, 0, 0, 0, 136, 136]);
decoded.decode(data);
// @ts-ignore foo
data.swap16();
console.log(data)

console.log(`decoded.value === "2001:4860:4860:0:0:0:0:8888 ? ${decoded.value === "2001:4860:4860:0:0:0:0:8888"}"`);