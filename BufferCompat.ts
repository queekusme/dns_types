import { Buffer } from "./deps.ts";

// deno-lint-ignore no-explicit-any
if(!(Buffer.prototype as any).swap16)
{
    // deno-lint-ignore no-explicit-any
    (Buffer.prototype as any).swap16 = function ()
    {
        for(let i = 0; i < (this as unknown as Buffer).buffer.byteLength; i += 2)
        {
            const temp = (this as unknown as Buffer)[i];
            (this as unknown as Buffer)[i] = (this as unknown as Buffer)[i + 1];
            (this as unknown as Buffer)[i + 1] = temp;
        }
    }
}