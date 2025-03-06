# Использование

## Использование UPKGT

_Обновлено: 2025-02-01 14:25:41 UTC_ _Автор:_ [_AnmiTaliDev_](https://github.com/AnmiTaliDev)

### Содержание

1. Основные команды
2. Управление пакетами
3. Системные операции
4. Работа с резервными копиями
5. Дополнительные возможности
6. Примеры использования

### Основные команды

#### Просмотр помощи

```bash
# Общая справка
upkgt --help

# Справка по конкретной команде
upkgt install --help
upkgt remove --help
```

#### Информация о версии

```bash
# Версия программы
upkgt --version

# Подробная информация
upkgt version --verbose
```

### Управление пакетами

#### Установка пакетов

```bash
# Установка из файла
upkgt install package.deb
upkgt install package.rpm
upkgt install package.eopkg
upkgt install package.pkg.tar.xz
upkgt install package.apk

# Принудительная установка
upkgt install --force package.deb

# Установка с резервной копией
upkgt install --backup package.rpm

# Установка без зависимостей
upkgt install --nodeps package.eopkg

# Тихая установка
upkgt install --quiet package.pkg.tar.xz

# Установка с подробным выводом
upkgt install --verbose package.apk
```

#### Удаление пакетов

```bash
# Простое удаление
upkgt remove packagename

# Удаление с конфигурацией
upkgt remove --purge packagename

# Удаление с зависимостями
upkgt remove --recursive packagename

# Принудительное удаление
upkgt remove --force packagename

# Удаление с резервной копией
upkgt remove --backup packagename
```

#### Информация о пакетах

```bash
# Просмотр информации
upkgt info package.deb

# Список файлов
upkgt list package.rpm

# Просмотр зависимостей
upkgt deps package.eopkg

# Проверка пакета
upkgt verify package.pkg.tar.xz

# Поиск файлов
upkgt search filename
```

### Системные операции

#### Обновление системы

```bash
# Обновление базы данных
upkgt update

# Обновление всех пакетов
upkgt upgrade

# Выборочное обновление
upkgt upgrade packagename

# Безопасное обновление
upkgt upgrade --safe
```

#### Очистка системы

```bash
# Очистка кэша
upkgt clean cache

# Очистка неиспользуемых пакетов
upkgt clean unused

# Очистка старых версий
upkgt clean versions

# Полная очистка
upkgt clean all
```

### Работа с резервными копиями

#### Создание резервных копий

```bash
# Создание полной резервной копии
upkgt backup create

# Резервное копирование конкретного пакета
upkgt backup create packagename

# Создание именованной копии
upkgt backup create --name mybackup
```

#### Восстановление из резервной копии

```bash
# Восстановление последней копии
upkgt backup restore

# Восстановление конкретной копии
upkgt backup restore mybackup

# Восстановление отдельного пакета
upkgt backup restore --package packagename
```

#### Управление резервными копиями

```bash
# Список резервных копий
upkgt backup list

# Удаление резервной копии
upkgt backup delete mybackup

# Очистка старых копий
upkgt backup clean
```

### Дополнительные возможности

#### Диагностика

```bash
# Проверка системы
upkgt check system

# Проверка пакета
upkgt check package packagename

# Проверка зависимостей
upkgt check deps

# Проверка целостности
upkgt check integrity
```

#### Экспорт и импорт

```bash
# Экспорт списка пакетов
upkgt export packages > packages.list

# Импорт списка пакетов
upkgt import packages < packages.list

# Экспорт конфигурации
upkgt export config > config.yaml
```

#### Логирование

```bash
# Просмотр логов
upkgt logs show

# Просмотр ошибок
upkgt logs errors

# Экспорт логов
upkgt logs export > upkgt.log

# Очистка логов
upkgt logs clean
```

### Примеры использования

#### Массовая установка

```bash
# Установка нескольких пакетов
upkgt install package1.deb package2.rpm package3.eopkg

# Установка из списка
upkgt install --file packages.list

# Установка с подтверждением
upkgt install --interactive package.deb
```

#### Обслуживание системы

```bash
# Полное обновление системы
upkgt update && upkgt upgrade

# Очистка системы
upkgt clean all && upkgt check system

# Создание резервной копии перед обновлением
upkgt backup create && upkgt upgrade
```

#### Работа с зависимостями

```bash
# Проверка зависимостей
upkgt deps check packagename

# Установка с зависимостями
upkgt install --with-deps package.deb

# Поиск конфликтов
upkgt deps conflicts packagename
```

#### Пакетные операции

```bash
# Пакетное удаление
upkgt remove --file remove.list

# Пакетное обновление
upkgt upgrade --file upgrade.list

# Пакетная проверка
upkgt verify --file verify.list
```

Все команды имеют встроенную справку, доступную через флаг --help. Для подробной информации о конкретной команде используйте:

```bash
upkgt [команда] --help
```

