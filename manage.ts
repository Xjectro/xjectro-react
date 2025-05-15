import { program } from 'commander';
import { spawnSync } from 'child_process';

const PACKAGES = ['react', 'shared', 'utils'];

program
  .option('--filter-name <name>')
  .option('-s, --separator <char>')
  .argument('<string>');

program.parse();

const target = program.args[0] || '';

if (!PACKAGES.includes(target) && target !== 'all') {
  console.error(`Unknown package: ${target}`);
  process.exit(1);
}

console.log(`🛠  Releasing package: ${target}`);

function spawn(pkg: string) {
  const result = spawnSync('npm', ['run', 'release'], {
    cwd: `packages/${pkg}`,
    stdio: 'inherit',
    shell: true,
  });

  if (result.error) {
    console.error(result.error);
  }
}

switch (target) {
  case 'all':
    PACKAGES.forEach((pkg) => {
      spawn(pkg);
    });
    break;
  case target:
    spawn(target);
    break;
}
