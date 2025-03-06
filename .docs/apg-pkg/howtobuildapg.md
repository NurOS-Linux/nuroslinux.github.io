# Как собрать apg

## Руководство по сборке пакетов .apg

### Метод 1: Использование apgbuild

Этот способ позволяет автоматизировать процесс создания пакета с помощью утилиты [apgbuild](https://github.com/nuros-linux/apgbuild).

#### 1. Установка apgbuild

Следуйте инструкциям в README репозитория apgbuild.

#### 2. Получение исходного кода

Загрузите исходный код программы, которую хотите упаковать:

```sh
wget https://example.com/source.tar.gz
```

Разархивируйте загруженный файл:

```sh
tar -xvzf source.tar.gz
cd source
```

#### 3. Компиляция без установки в систему

Соберите программу и установите её в отдельную директорию (например, `pkgdir`):

```sh
mkdir -p pkgdir
./configure --prefix=/usr
make
make DESTDIR=$(pwd)/pkgdir install
```

#### 4. Подготовка структуры пакета

Создайте структуру пакета в соответствии с форматом `.apg`:

```
package.apg/
├── metadata.json      # Метаданные пакета
├── scripts/           # Скрипты установки и удаления
│   ├── preinstall    # Выполняется перед установкой
│   ├── postinstall   # Выполняется после установки
│   ├── preremove     # Выполняется перед удалением
│   └── postremove    # Выполняется после удаления
├── data/              # Файлы пакета
│   └── (исполняемые файлы, библиотеки и т.д.)
└── md5sums            # Контрольные суммы
```

Переместите необходимые файлы в `package.apg/data`. Обычно это:

* `/usr/bin/` — исполняемые файлы
* `/usr/lib/` — библиотеки
* `/usr/share/` — файлы документации, иконки, локализация
* `/etc/` — файлы конфигурации
* `/usr/include/` — заголовочные файлы (если необходимы)

#### 5. Создание metadata.json

Сгенерируйте файл `metadata.json` командой:

```sh
apgbuild -m package.apg
```

Заполните поля, указав название пакета, его версию, архитектуру и зависимости.

Пример `metadata.json`:

```json
{
    "name": "example",
    "version": "1.0",
    "release": 1,
    "architecture": "x86_64",
    "description": "Example package",
    "maintainer": "John Doe <johndoe@example.com>",
    "license": "MIT",
    "homepage": "https://example.com",
    "dependencies": [
        {
            "name": "libexample",
            "version": "1.2.3",
            "condition": ">="
        }
    ],
    "conflicts": [
        "example-old"
    ],
    "provides": [
        "example-feature"
    ],
    "replaces": [
        "example-legacy"
    ]
}
```

#### 6. Генерация контрольных сумм

```sh
apgbuild --makesums package.apg
```

#### 7. Создание пакета

```sh
apgbuild -o имяпакета-версия-релиз-архитектура.apg
```

Пример:

```sh
apgbuild -o example-1.0-1-x86_64.apg
```

***

### Метод 2: Ручная сборка (экстремальный вариант)

Этот метод предполагает выполнение всех шагов вручную без использования apgbuild.

#### 1. Получение и компиляция программы

```sh
wget https://example.com/source.tar.gz
mkdir -p build
cd build
tar -xvzf ../source.tar.gz
cd source
./configure --prefix=/usr
make
make DESTDIR=$(pwd)/pkgdir install
```

#### 2. Подготовка структуры пакета

Создайте директорию пакета:

```sh
mkdir -p package.apg/data
mv pkgdir/usr/bin package.apg/data/
mv pkgdir/usr/lib package.apg/data/
mv pkgdir/usr/share package.apg/data/
```

Создайте папку для скриптов (если нужны):

```sh
mkdir -p package.apg/scripts
```

#### 3. Создание metadata.json вручную

Создайте файл `package.apg/metadata.json` и заполните его:

```json
{
    "name": "example",
    "version": "1.0",
    "release": 1,
    "architecture": "x86_64",
    "description": "Example package",
    "maintainer": "John Doe <johndoe@example.com>",
    "license": "MIT",
    "homepage": "https://example.com",
    "dependencies": [],
    "conflicts": [],
    "provides": [],
    "replaces": []
}
```

#### 4. Генерация контрольных сумм

```sh
cd package.apg
find data -type f -exec md5sum {} \; > md5sums
```

#### 5. Архивация в .tar.xz

```sh
tar -cJf example-1.0-1-x86_64.tar.xz -C package.apg .
```

#### 6. Конвертация в .apg

```sh
mv example-1.0-1-x86_64.tar.xz example-1.0-1-x86_64.apg
```

Теперь ваш пакет готов к установке!
