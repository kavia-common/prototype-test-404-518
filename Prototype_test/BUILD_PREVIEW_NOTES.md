# Prototype_test Preview Notes

This project is an Angular 17 application (standalone components), not React.

How to run locally:
- Install: npm ci
- Start: npm start
  - This runs: ng serve app --host 0.0.0.0 --port 3000
- Open http://localhost:3000

Routes:
- /            -> Home page (simple CTA to open Config Server)
- /config      -> Config Server screen (primary UI)
- /rules       -> Rules screen

Blank screen mitigation:
- index.html includes a lightweight loading placeholder to avoid an initial blank screen.
- src/main.ts logs to console when the app starts; on errors it displays a small error banner in the bottom.
- If you still see a blank page, open DevTools Console and check for errors or missing dependency installs.

Troubleshooting:
- Ensure devDependencies are installed (prebuild script auto-installs @angular-devkit/build-angular if missing).
- If port 3000 is occupied, stop the other process or adjust the port in package.json `start` script.
