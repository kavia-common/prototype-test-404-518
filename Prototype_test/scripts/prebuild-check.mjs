import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';

try {
  if (!existsSync('./node_modules/@angular-devkit/build-angular/package.json')) {
    console.log('Installing @angular-devkit/build-angular...');
    execSync('npm i -D @angular-devkit/build-angular@^17.3.1', { stdio: 'inherit' });
  } else {
    console.log('@angular-devkit/build-angular already present.');
  }
} catch (e) {
  console.error('Failed to ensure builder is installed:', e);
  process.exit(1);
}
