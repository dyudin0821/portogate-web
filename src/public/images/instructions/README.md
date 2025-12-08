# Инструкции по добавлению изображений для PortoGate

Эта папка предназначена для хранения скриншотов и изображений инструкций по настройке VPN-приложений.

## Структура папок

```
instructions/
├── android/          # Скриншоты для Android-приложений
├── ios/              # Скриншоты для iOS/MacOS-приложений
├── windows/          # Скриншоты для Windows-приложений
├── linux/            # Скриншоты для Linux-приложений
└── tv/               # Скриншоты для Android TV
```

## Рекомендации по изображениям

### Формат и размер
- **Формат**: PNG или WebP (для лучшей оптимизации)
- **Максимальная ширина**: 800-1200px
- **Сжатие**: используйте оптимизацию для веб (TinyPNG, Squoosh и т.д.)

### Содержание скриншотов

Для каждого приложения рекомендуется создать скриншоты следующих этапов:

1. **Главный экран приложения** (`main-screen.png`)
2. **Добавление конфигурации** (`add-config.png`)
3. **Импорт из буфера/QR** (`import.png`)
4. **Подключенное состояние** (`connected.png`)
5. **Настройки** (`settings.png`) - опционально

### Именование файлов

Используйте понятные имена на английском:
- `hiddify-main.png` - главный экран Hiddify
- `v2rayng-import.png` - процесс импорта в v2rayNG
- `outline-connected.png` - подключенное состояние в Outline

### Конфиденциальность

⚠️ **Важно**: Убедитесь, что на скриншотах:
- Замазаны/скрыты реальные IP-адреса серверов
- Скрыты ключи доступа и токены
- Нет персональной информации пользователей

## Добавление изображений в инструкции

### Синтаксис Markdown

```mdx
![Описание изображения](/images/instructions/android/hiddify-main.png)
```

### С атрибутами

```mdx
<img 
  src="/images/instructions/android/hiddify-main.png" 
  alt="Главный экран Hiddify Next"
  class="rounded-lg border border-slate-600 my-4"
/>
```

### Галерея из нескольких изображений

```mdx
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <img 
    src="/images/instructions/android/step1.png" 
    alt="Шаг 1"
    class="rounded-lg border border-slate-600"
  />
  <img 
    src="/images/instructions/android/step2.png" 
    alt="Шаг 2"
    class="rounded-lg border border-slate-600"
  />
</div>
```

## Список приложений для скриншотов

### Android
- [ ] Hiddify Next
- [ ] v2rayNG
- [ ] Outline
- [ ] Karing
- [ ] v2rayTun
- [ ] Happ
- [ ] ShadowSocks

### iOS/MacOS
- [ ] v2Box
- [ ] Hiddify Next
- [ ] Streisand
- [ ] Karing
- [ ] Outline
- [ ] ShadowLink

### Windows
- [ ] Hiddify Next
- [ ] v2rayN
- [ ] Karing
- [ ] Nekoray
- [ ] Outline

### Linux
- [ ] Hiddify Next
- [ ] Nekoray
- [ ] Outline

### Android TV
- [ ] v2rayNG
- [ ] v2rayTun
- [ ] Happ

## Источники скриншотов

Для создания скриншотов можно использовать:
1. **Реальные устройства** - наиболее точные скриншоты
2. **Эмуляторы Android Studio** - для Android
3. **Xcode Simulator** - для iOS
4. **Скриншоты из магазинов приложений** - как референс

## Оптимизация изображений

Перед добавлением в репозиторий оптимизируйте изображения:

```bash
# Установка инструментов оптимизации
npm install -g @squoosh/cli

# Оптимизация PNG
squoosh-cli --webp auto images/instructions/**/*.png

# Или используйте онлайн-сервисы:
# - https://tinypng.com/
# - https://squoosh.app/
# - https://imageoptim.com/
```

## Примечания

- Старайтесь делать скриншоты в светлой или темной теме в зависимости от дизайна сайта
- Для мобильных приложений используйте портретную ориентацию
- Для десктопных - альбомную с разумным разрешением
- Добавляйте водяной знак "PortoGate" если необходимо защитить авторство
