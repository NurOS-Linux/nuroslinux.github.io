import en from './locales/en.json';
import ru from './locales/ru.json';
import kz from './locales/kz.json';

export const defaultLang = 'en' as const;
export type Lang = 'en' | 'ru' | 'kz';

export const ui = { en, ru, kz } as const;

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
  kz: [
    { title: 'Тәуелсіздік', description: 'Басқа дистрибутивтерге негізделмеген, жүйені толық басқаруды қамтамасыз етеді.' },
    { title: 'APG форматы', description: 'Жылдам орнату және тәуелділіктерді толық қолдауы бар өзіндік пакет форматы.' },
    { title: 'Заманауилық', description: 'Интуитивті жүйе конфигурациясы құралдары бар таза интерфейс.' },
    { title: 'Қоғамдастық', description: 'Telegram және GitHub арқылы белсенді қолдау.' },
  ],
};

export const teamData: Record<Lang, { name: string; role: string; skills: string }[]> = {
  en: [
    { name: 'CosmoBlade', role: 'Team Lead, Developer, Designer', skills: 'C++, Python, Go, JS, C' },
    { name: 'AnmiTaliDev', role: 'Founder, Coordinator', skills: 'Aluminum cucumbers' },
    { name: 'Ruzen', role: 'Developer, Installer & Tulpar Maintainer', skills: 'C#, C++, Haskell, Python' },
    { name: 'Meigoc', role: 'Developer, Tulpar-server Maintainer', skills: 'Java, Python, C++' },
    { name: 'chelik002', role: 'Developer, Designer', skills: 'Python' },
    { name: 'm1lkydev', role: 'Developer, Wallpaper Designer', skills: 'Python, Go, Lua' },
    { name: 'Space', role: 'Developer, Aether Apps Developer', skills: 'Python, C#' },
    { name: 'Rav1non', role: 'Developer, Package Builder', skills: 'Python, Java' },
    { name: 'got/gotrt', role: 'Developer', skills: 'Go, OCaml, C' },
    { name: 'b0nn133', role: 'Designer, Developer', skills: 'Vala, C#, Lua, Python' },
    { name: 'XCubicArnament', role: 'Developer', skills: 'C, C++, Python, JS' },
    { name: 'wholos', role: 'Developer', skills: 'C, C++, Nim, Rust' },
  ],
  ru: [
    { name: 'CosmoBlade', role: 'Тимлид, Разработчик, Дизайнер', skills: 'C++, Python, Go, JS, C' },
    { name: 'AnmiTaliDev', role: 'Основатель, координатор', skills: 'Алюминиевые огурцы' },
    { name: 'Ruzen', role: 'Разработчик, Maintainer установщика и Tulpar', skills: 'C#, C++, Haskell, Python' },
    { name: 'Meigoc', role: 'Разработчик, Maintainer проекта Tulpar-server', skills: 'Java, Python, C++' },
    { name: 'chelik002', role: 'Разработчик, Дизайнер', skills: 'Python' },
    { name: 'm1lkydev', role: 'Разработчик, Дизайнер обоев', skills: 'Python, Go, Lua' },
    { name: 'Space', role: 'Разработчик, Разработчик Aether Apps', skills: 'Python, C#' },
    { name: 'Rav1non', role: 'Разработчик, Сборка пакетов', skills: 'Python, Java' },
    { name: 'got/gotrt', role: 'Разработчик', skills: 'Go, OCaml, C' },
    { name: 'b0nn133', role: 'Дизайнер, Разработчик', skills: 'Vala, C#, Lua, Python' },
    { name: 'XCubicArnament', role: 'Разработчик', skills: 'C, C++, Python, JS' },
    { name: 'wholos', role: 'Разработчик', skills: 'C, C++, Nim, Rust' },
  ],
  kz: [
    { name: 'CosmoBlade', role: 'Тимлид, Әзірлеуші, Дизайнер', skills: 'C++, Python, Go, JS, C' },
    { name: 'AnmiTaliDev', role: 'Негізтаушы, Координатор', skills: 'Алюминий қияр' },
    { name: 'Ruzen', role: 'Әзірлеуші, Орнатушы және Tulpar Maintainer', skills: 'C#, C++, Haskell, Python' },
    { name: 'Meigoc', role: 'Әзірлеуші, Tulpar-server Maintainer', skills: 'Java, Python, C++' },
    { name: 'chelik002', role: 'Әзірлеуші, Дизайнер', skills: 'Python' },
    { name: 'm1lkydev', role: 'Әзірлеуші, Тұсқағаз дизайнері', skills: 'Python, Go, Lua' },
    { name: 'Space', role: 'Әзірлеуші, Aether Apps Әзірлеушісі', skills: 'Python, C#' },
    { name: 'Rav1non', role: 'Әзірлеуші, Пакет жинаушы', skills: 'Python, Java' },
    { name: 'got/gotrt', role: 'Әзірлеуші', skills: 'Go, OCaml, C' },
    { name: 'b0nn133', role: 'Дизайнер, Әзірлеуші', skills: 'Vala, C#, Lua, Python' },
    { name: 'XCubicArnament', role: 'Әзірлеуші', skills: 'C, C++, Python, JS' },
    { name: 'wholos', role: 'Әзірлеуші', skills: 'C, C++, Nim, Rust' },
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
  if (url.pathname.startsWith('/ru')) return 'ru';
  if (url.pathname.startsWith('/kz')) return 'kz';
  return 'en';
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof en): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}

/** Returns the equivalent URL in the target language. */
export function getAlternateUrl(pathname: string, targetLang: Lang): string {
  const isRu = pathname.startsWith('/ru');
  const isKz = pathname.startsWith('/kz');
  let base: string;
  if (isRu || isKz) base = pathname.slice(3) || '/';
  else base = pathname;

  if (targetLang === 'ru') return base === '/' ? '/ru' : `/ru${base}`;
  if (targetLang === 'kz') return base === '/' ? '/kz' : `/kz${base}`;
  return base;
}
