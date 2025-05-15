import { defineConfig } from 'tsup';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const packagesDir = join(__dirname, 'packages');
const packageNames = fs
  .readdirSync(packagesDir)
  .filter((name) => fs.readdirSync(join(packagesDir, name)).includes('src'));

export default packageNames.flatMap((name) => [
  defineConfig({
    entry: [`packages/${name}/src/**/*.{ts,tsx,jsx,js,mjs}`],
    format: ['cjs', 'esm'],
    bundle: false,
    outDir: `packages/${name}/dist`,
    outExtension: ({ format }) => ({ js: format === 'cjs' ? '.cjs' : '.mjs' }),
    dts: true,
    sourcemap: false,
    minify: true,
    clean: true,
    platform: 'node',
    target: 'es2020',
    external: ['path'],
  }),
]);
