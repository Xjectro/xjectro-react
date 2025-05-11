import { defineConfig } from "tsup";
import {dependencies } from "./package.json"

export default defineConfig({
  entry: [
    "src",
  ],
  format: ["cjs","esm"],
  bundle: false,
  outDir: 'dist',
  outExtension: ({ format }) => ({ js: format ==='cjs' ? '.cjs' : '.mjs' }),
  dts: true,
  sourcemap: false,
  minify: true,
  clean: true,
  platform: "node",
  target: "es2020",
  external: [
    'path',
    ...Object.keys(dependencies || {}),
  ],
});
