Build notes:
- Run `npm ci` or `npm install` in Prototype_test before building to install devDependencies, including @angular-devkit/build-angular.
- If the environment skips install, the build script triggers scripts/prebuild-check.mjs to install the builder package.
- The workspace files angular.json and .angular.json both declare the default project "app" to satisfy validators that read different filenames.
