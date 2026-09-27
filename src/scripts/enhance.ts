import { greetingIndex, whatsappUrl } from '../lib/whatsapp';

type Theme = 'light' | 'dark';

function initThemeToggle(): void {
  const button = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
  if (!button) return;

  const root = document.documentElement;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const current = (): Theme => {
    const saved = root.dataset.theme;
    if (saved === 'light' || saved === 'dark') return saved;
    return prefersDark.matches ? 'dark' : 'light';
  };
  const sync = () => button.setAttribute('aria-pressed', String(current() === 'dark'));

  button.addEventListener('click', () => {
    const next: Theme = current() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage blocked (e.g. private mode): the choice lasts for this page only.
    }
    sync();
  });
  prefersDark.addEventListener('change', sync);

  sync();
  button.hidden = false;
}

/** The HTML ships a neutral message; this adds a greeting based on the local time. */
function initWhatsAppLinks(): void {
  const index = greetingIndex(new Date().getHours());
  for (const link of document.querySelectorAll<HTMLAnchorElement>('[data-wa-template]')) {
    const { waPhone, waTemplate, waGreetings } = link.dataset;
    const greeting = waGreetings?.split('|')[index];
    if (!waPhone || !waTemplate || !greeting) continue;
    link.href = whatsappUrl(waPhone, waTemplate.replace('{greeting}', greeting));
  }
}

initThemeToggle();
initWhatsAppLinks();
