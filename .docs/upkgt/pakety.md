# Пакеты

## Форматы пакетов UPKGT

### Содержание

1. Обзор форматов
2. DEB пакеты
3. RPM пакеты
4. EOPKG пакеты
5. Pacman пакеты
6. APK пакеты
7. Спецификация формата

### Обзор форматов

UPKGT поддерживает основные форматы пакетов Linux-дистрибутивов:

| Формат | Расширение  | Дистрибутивы    | Описание                               |
| ------ | ----------- | --------------- | -------------------------------------- |
| DEB    | .deb        | Debian, Ubuntu  | Основной формат Debian-подобных систем |
| RPM    | .rpm        | Red Hat, Fedora | Формат Red Hat Package Manager         |
| EOPKG  | .eopkg      | Solus           | Формат пакетов Solus Linux             |
| Pacman | .pkg.tar.\* | Arch Linux      | Формат пакетов Arch Linux              |
| APK    | .apk        | Alpine Linux    | Формат Alpine Package Keeper           |

### DEB пакеты

#### Структура

package.deb ├── debian-binary ├── control.tar.gz │ ├── control │ ├── md5sums │ ├── preinst │ ├── postinst │ ├── prerm │ └── postrm └── data.tar.xz └── files...

```

### Метаданные
- control - основная информация о пакете
- md5sums - контрольные суммы файлов
- triggers - триггеры пакета
- conffiles - список конфигурационных файлов

### Скрипты
- preinst - перед установкой
- postinst - после установки
- prerm - перед удалением  
- postrm - после удаления

## RPM пакеты

### Структура
```

package.rpm ├── Header │ ├── Package Info │ └── File Info └── Payload └── files...

```

### Метаданные
- SPEC файл - описание пакета
- Provides - предоставляемые возможности
- Requires - зависимости
- Conflicts - конфликты
- Obsoletes - устаревшие пакеты

### Скрипты
- %pre - перед установкой
- %post - после установки
- %preun - перед удалением
- %postun - после удаления

## EOPKG пакеты

### Структура
```

package.eopkg ├── metadata.xml ├── files.xml ├── comar/ │ └── scripts... └── install.tar.xz └── files...

```

### Метаданные
- metadata.xml - информация о пакете
- files.xml - список файлов
- component - компонент пакета
- dependencies - зависимости

### Скрипты
- COMAR скрипты
- package.py
- actions.py

## Pacman пакеты

### Структура
```

package.pkg.tar.xz ├── .PKGINFO ├── .BUILDINFO ├── .MTREE ├── .INSTALL └── files...

```

### Метаданные
- .PKGINFO - информация о пакете
- .BUILDINFO - информация о сборке
- .MTREE - структура файлов
- .INSTALL - установочные скрипты

### Скрипты
- pre_install()
- post_install()
- pre_upgrade()
- post_upgrade()
- pre_remove()
- post_remove()

## APK пакеты

### Структура
```

package.apk ├── .PKGINFO ├── .SIGN.RSA.\* ├── .SIGN.RSA.\*.pub └── files...

````

### Метаданные
- APKBUILD - описание пакета
- .PKGINFO - информация о пакете
- .SIGN.* - подписи пакета

### Триггеры
- .pre-install
- .post-install
- .pre-deinstall
- .post-deinstall

## Спецификация формата

### Общий интерфейс
```go
type Package interface {
    // Получение информации о пакете
    Info() (*PackageInfo, error)
    
    // Извлечение файлов
    Extract(path string) error
    
    // Проверка целостности
    Verify() error
    
    // Получение метаданных
    Metadata() map[string]string
    
    // Список файлов
    Files() []string
    
    // Проверка зависимостей
    CheckDeps() error
    
    // Получение скриптов
    Scripts() map[string]string
    
    // Создание пакета
    Create(files []string, info *PackageInfo) error
}
````

#### Структура PackageInfo

```go
type PackageInfo struct {
    // Основная информация
    Name        string
    Version     string
    Release     string
    Arch        string
    
    // Описательная информация
    Description string
    Homepage    string
    License     string
    
    // Метаинформация
    Maintainer  string
    BuildDate   time.Time
    Size        int64
    
    // Зависимости
    Depends     []string
    Provides    []string
    Conflicts   []string
    Replaces    []string
    
    // Дополнительно
    Priority    string
    Section     string
    Source      string
}
```

#### Обработка пакетов

1. Определение формата

```go
format := DetectFormat(filename)
```

2. Создание обработчика

```go
handler := NewPackageHandler(format)
```

3. Загрузка пакета

```go
pkg, err := handler.Load(filename)
```

4. Работа с пакетом

```go
// Получение информации
info := pkg.Info()

// Извлечение файлов
pkg.Extract("/tmp/pkg")

// Проверка
pkg.Verify()
```

#### Создание пакетов

1. Подготовка информации

```go
info := &PackageInfo{
    Name: "mypackage",
    Version: "1.0.0",
    // ...
}
```

2. Создание пакета

```go
files := []string{
    "/usr/bin/myapp",
    "/etc/myapp.conf",
}

pkg.Create(files, info)
```

#### Проверка пакетов

1. Проверка подписи

```go
pkg.VerifySignature()
```

2. Проверка контрольных сумм

```go
pkg.VerifyChecksums()
```

3. Проверка зависимостей

```go
pkg.CheckDependencies()
```

4. Проверка конфликтов

```go
pkg.CheckConflicts() обработки в UPKGT. Включает как общий обзор, так и технические детали реализации.
```
