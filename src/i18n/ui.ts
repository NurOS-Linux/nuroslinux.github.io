import en from './locales/en.json';
import ru from './locales/ru.json';

export const defaultLang = 'en' as const;
export type Lang = 'en' | 'ru';

export const ui = { en, ru } as const;

// Structured data (features, team)
export const featuresData: Record<Lang, { title: string; description: string }[]> = {
  en: [
    { title: 'Independence', description: 'Not based on other distributions, providing full control over the system.' },
    { title: 'APG Format', description: 'Custom package format with fast installation and full dependency support.' },
    { title: 'Modern', description: 'Clean interface with intuitive system configuration tools.' },
    { title: 'Community', description: 'Active support through Telegram and GitHub.' },
  ],
  ru: [
    { title: 'Независимость', description: 'Не основан на других дистрибутивах, обеспечивая полный контроль над системой.' },
    { title: 'Формат APG', description: 'Собственный формат пакетов с быстрой установкой и полной поддержкой зависимостей.' },
    { title: 'Современность', description: 'Чистый интерфейс с интуитивно понятными инструментами настройки системы.' },
    { title: 'Сообщество', description: 'Активная поддержка через Telegram и GitHub.' },
  ],
};

export const teamData: Record<Lang, { name: string; role: string; skills: string }[]> = {
  en: [
    { name: 'AnmiTaliDev', role: 'Founder, Team Lead', skills: '' },
    { name: 'Ruzen', role: 'Installer & Tulpar Developer', skills: 'C#, C++, Haskell, Python' },
    { name: 'Meigoc', role: 'Developer, Tulpar-server Maintainer', skills: 'Java, Python, C++' },
    { name: 'chelik002', role: 'Developer, Designer', skills: 'Python' },
    { name: 'CosmoBlade', role: 'Developer, Designer', skills: 'C++, Python, Go, JS, C' },
    { name: 'Isnt', role: 'Developer, NeoInit Developer', skills: 'Zig, Rust, C' },
    { name: 'TheMomer', role: 'Developer, Wallpaper Designer', skills: 'Python, Go, Lua' },
    { name: 'Space', role: 'Developer, Aether Apps Developer', skills: 'Python, C#' },
    { name: 'Rav1non', role: 'Developer, Package Builder', skills: 'Python, Java' },
    { name: 'got/gotrt', role: 'Network Programming, DevOps & Lang Dev', skills: 'Go, OCaml, C' },
    { name: 'girisato', role: 'Designer', skills: '' },
  ],
  ru: [
    { name: 'AnmiTaliDev', role: 'Основатель, тимлид', skills: '' },
    { name: 'Ruzen', role: 'Разработчик установщика и Tulpar', skills: 'C#, C++, Haskell, Python' },
    { name: 'Meigoc', role: 'Разработчик, Maintainer проекта Tulpar-server', skills: 'Java, Python, C++' },
    { name: 'chelik002', role: 'Разработчик, Дизайнер', skills: 'Python' },
    { name: 'CosmoBlade', role: 'Разработчик, Дизайнер', skills: 'C++, Python, Go, JS, C' },
    { name: 'Isnt', role: 'Разработчик, Разработчик NeoInit', skills: 'Zig, Rust, C' },
    { name: 'TheMomer', role: 'Разработчик, Дизайнер обоев', skills: 'Python, Go, Lua' },
    { name: 'Space', role: 'Разработчик, Разработчик Aether Apps', skills: 'Python, C#' },
    { name: 'Rav1non', role: 'Разработчик, Сборка пакетов', skills: 'Python, Java' },
    { name: 'got/gotrt', role: 'Сетевое программирование, devops и langdev', skills: 'Go, OCaml, C' },
    { name: 'girisato', role: 'Дизайнер', skills: '' },
  ],
};

// Download variants
export type DownloadArch = { name: string; link: string | null };
export type DownloadEdition = { id: 'juldyz' | 'josh'; arches: DownloadArch[] };

const ARCHES: DownloadArch[] = [
  { name: 'x86_64',          link: 'https://t.me/nuros_ru/754' },
  { name: 'x86',             link: null },
  { name: 'aarch64 & armv7', link: null },
  { name: 'RV64GC & RV32GC', link: null },
  { name: 'MIPS32',          link: null },
];

export const downloadEditions: DownloadEdition[] = [
  { id: 'juldyz', arches: ARCHES },
  { id: 'josh',   arches: ARCHES.map((a) => ({ ...a, link: null })) },
];

// Helpers
export function getLangFromUrl(url: URL): Lang {
  return url.pathname.startsWith('/ru') ? 'ru' : 'en';
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof en): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}

/** Returns the equivalent URL in the target language. */
export function getAlternateUrl(pathname: string, targetLang: Lang): string {
  const isRu = pathname.startsWith('/ru');
  const base = isRu ? pathname.slice(3) || '/' : pathname;
  return targetLang === 'ru' ? (base === '/' ? '/ru' : `/ru${base}`) : base;
}
