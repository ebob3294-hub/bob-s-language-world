import { cp, copyFile, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const sourceDir = resolve(".output/public");
const webDir = resolve("dist/client");
const spaShell = resolve(webDir, "_shell.html");
const appEntry = resolve(webDir, "index.html");

await rm(webDir, { recursive: true, force: true });
await mkdir(webDir, { recursive: true });
await cp(sourceDir, webDir, { recursive: true });
await copyFile(spaShell, appEntry);

console.log("Prepared Capacitor web assets and index.html at dist/client");