export const languages = {
  ru: 'Русский',
};

export const defaultLang = 'ru';

export const ui = {
  ru: {
    'nav.home': 'Главная',
    'nav.docs': 'Документация',
    'nav.pricing': 'Тарифы',
    'nav.faq': 'FAQ',
    'hero.title': 'PortoGate',
    'hero.subtitle': 'Персональный шлюз для безопасного подключения',
    'hero.description': 'Современное решение для персонального доступа к интернету с адаптацией под ваши потребности',
    'hero.cta': 'Начать использование',
    'features.title': 'Возможности',
    'features.secure.title': 'Безопасное подключение',
    'features.secure.description': 'Надёжная защита ваших данных с современными протоколами',
    'features.fast.title': 'Высокая скорость',
    'features.fast.description': 'Оптимизированные серверы для максимальной производительности',
    'features.simple.title': 'Простота использования',
    'features.simple.description': 'Интуитивный интерфейс и быстрая настройка',
    'features.support.title': 'Поддержка 24/7',
    'features.support.description': 'Техническая поддержка в любое время через Telegram',
    'how.title': 'Как это работает',
    'how.step1': 'Откройте Telegram-бота',
    'how.step2': 'Выберите подходящий тариф',
    'how.step3': 'Получите настройки подключения',
    'how.step4': 'Наслаждайтесь безопасным интернетом',
    'how.docs': 'Подробные инструкции',
    'pricing.title': 'Тарифы',
    'pricing.local.title': 'PortoLocal',
    'pricing.local.description': 'Доступ к привычным сервисам в РФ, даже находясь за границей',
    'pricing.global.title': 'PortoGlobal',
    'pricing.global.description': 'Безопасный и свободный интернет из любой точки мира',
    'pricing.period.label': 'Период:',
    'pricing.period.1day': '1 день',
    'pricing.period.7days': '7 дней',
    'pricing.period.30days': '30 дней',
    'pricing.period.90days': '90 дней',
    'pricing.period.180days': '180 дней',
    'pricing.devices.label': 'Количество устройств:',
    'pricing.devices.1': '1 устройство',
    'pricing.devices.3': '3 устройства',
    'pricing.devices.5': '5 устройств',
    'pricing.select': 'Выбрать тариф',
    'faq.title': 'Часто задаваемые вопросы',
    'footer.telegram': 'Telegram',
    'footer.github': 'GitHub',
    'footer.privacy': 'Политика конфиденциальности',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
