# Конфигурация

## Конфигурация UPKGT

### Содержание

1. Расположение файлов
2. Системная конфигурация
3. Пользовательская конфигурация
4. Переменные окружения
5. Приоритеты настроек
6. Настройка безопасности

### Расположение файлов

#### Конфигурационные файл

/etc/upkgt/ ├── config.yaml # Системная конфигурация ├── repos.yaml # Настройки репозиториев ├── security.yaml # Настройки безопасности └── keys/ # Директория с ключами ├── trusted.gpg # Доверенные ключи └── revoked.gpg # Отозванные ключи

\~/.config/upkgt/ ├── config.yaml # Пользовательская конфигурация ├── repos.yaml # Пользовательские репозитории └── keys/ # Пользовательские ключи

```

### Рабочие директории
```

/var/lib/upkgt/ ├── db/ # База данных пакетов ├── cache/ # Кэш пакетов └── backups/ # Резервные копии

/var/log/upkgt/ # Директория логов

````

## Системная конфигурация

### Базовые настройки
```yaml
system:
  # Общие настройки
  root_dir: /
  temp_dir: /var/tmp/upkgt
  lock_file: /var/run/upkgt.lock

  # Ограничения
  max_parallel_downloads: 4
  max_cache_size: 1024  # МБ
  max_log_size: 100     # МБ
  max_backups: 5

  # Таймауты
  download_timeout: 300  # секунд
  install_timeout: 600   # секунд
  verify_timeout: 60     # секунд
````

#### Безопасность

```yaml
security:
  # Проверка подписей
  verify_signatures: true
  allow_unsigned: false
  
  # Контрольные суммы
  verify_checksums: true
  checksum_algorithm: sha256
  
  # Права доступа
  umask: 0022
  dir_mode: 0755
  file_mode: 0644
```

#### Логирование

```yaml
logging:
  # Настройки логов
  level: info        # debug, info, warn, error
  format: text       # text, json
  timestamp: true
  colors: auto       # auto, always, never
  
  # Ротация
  max_size: 100     # МБ
  max_files: 10
  compress: true
```

### Пользовательская конфигурация

#### Основные настройки

```yaml
general:
  # Интерфейс
  color: auto        # auto, always, never
  progress: true     # показывать прогресс
  confirm: true      # запрашивать подтверждение
  verbose: false     # подробный вывод

  # Поведение
  parallel: true     # параллельная обработка
  backup: true       # создавать резервные копии
  clean: true       # очищать кэш после установки
```

#### Форматы пакетов

```yaml
formats:
  # DEB пакеты
  deb:
    enabled: true
    verify: true
    scripts: true
    
  # RPM пакеты  
  rpm:
    enabled: true
    verify: true
    scripts: true
    
  # EOPKG пакеты
  eopkg:
    enabled: true
    verify: true
    scripts: true
    
  # Pacman пакеты
  pacman:
    enabled: true
    verify: true
    scripts: true
    
  # APK пакеты
  apk:
    enabled: true
    verify: true
    scripts: true
```

### Переменные окружения

#### Основные переменные

```bash
# Пути
UPKGT_CONFIG=/etc/upkgt/config.yaml
UPKGT_CACHE=/var/cache/upkgt
UPKGT_LOG=/var/log/upkgt/upkgt.log

# Поведение
UPKGT_COLOR=auto
UPKGT_VERBOSE=0
UPKGT_DEBUG=0

# Безопасность
UPKGT_VERIFY=1
UPKGT_ALLOW_UNSIGNED=0
```

### Приоритеты настроек

Настройки применяются в следующем порядке (от низшего к высшему):

1. Системные настройки по умолчанию
2. Системный конфигурационный файл
3. Пользовательский конфигурационный файл
4. Переменные окружения
5. Параметры командной строки

Все настройки можно изменить через:

* Редактирование конфигурационных файлов
* Установку переменных окружения
* Использование параметров командной строки
