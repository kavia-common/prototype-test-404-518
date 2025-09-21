import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

// PUBLIC_INTERFACE
// Entry bootstrap for the Angular prototype application.
// Adds basic diagnostics so preview environments can confirm successful startup.
console.info('[Prototype_test] Starting Angular app…');

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
})
  .then(() => {
    console.info('[Prototype_test] Angular app bootstrapped successfully.');
  })
  .catch(err => {
    console.error('[Prototype_test] Bootstrap error:', err);
    try {
      const el = document.getElementById('preview-error');
      if (el) {
        el.style.display = 'block';
        el.textContent = 'Failed to start app: ' + (err?.message || String(err));
      }
    } catch {}
  });

// Global error banner to surface runtime errors in preview quickly
window.addEventListener('error', (ev) => {
  try {
    const el = document.getElementById('preview-error');
    if (el) {
      el.style.display = 'block';
      el.textContent = 'Runtime error: ' + (ev.error?.message || ev.message || String(ev));
    }
  } catch {}
});
