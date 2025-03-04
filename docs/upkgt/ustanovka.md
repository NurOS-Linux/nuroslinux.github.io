# Установка

## Установка UPKGT

### Содержание

1. Требования к системе
2. Установка из исходного кода
3. Пост-установка
4. Проверка установки
5. Обновление
6. Удаление

### Требования к системе

#### Минимальные требования

* **CPU:** 1 ядро
* **RAM:** 256MB
* **Диск:** 50MB свободного места
* **ОС:** Linux (ядро 4.x или новее)
* **Go:** версия 1.21 или новее

#### Зависимости для сборки

* git
* make
* gcc
* tar
* gzip

#### Проверка зависимостей

```bash
# Проверка версии Go
go version

# Проверка наличия инструментов сборки
which git make gcc tar gzip
```

### Установка из исходного кода

#### Получение кода

```bash
# Клонирование репозитория
git clone https://github.com/NurOS-Linux/upkgt.git

# Переход в директорию проекта
cd upkgt
```

#### Сборка

```bash
# Сборка для текущей платформы
./build.sh build
```

#### Установка в систему

```bash
# Установка бинарного файла
sudo mv bin/upkgt /usr/local/bin/

# Установка прав доступа
sudo chmod 755 /usr/local/bin/upkgt
```

### Пост-установка

#### Создание директорий

```bash
# Директория для логов
sudo mkdir -p /var/log/upkgt
sudo chown $USER /var/log/upkgt

# Директория конфигурации
mkdir -p ~/.config/upkgt

# Директория для кэша
sudo mkdir -p /var/cache/upkgt
sudo chown $USER /var/cache/upkgt

# Директория для резервных копий
sudo mkdir -p /var/backups/upkgt
sudo chown $USER /var/backups/upkgt
```

#### Настройка окружения

```bash
# Добавление автодополнения для bash
echo 'source <(upkgt completion bash)' >> ~/.bashrc

# Добавление автодополнения для zsh
echo 'source <(upkgt completion zsh)' >> ~/.zshrc
```

### Проверка установки

#### Проверка версии

```bash
upkgt --version
```

#### Проверка работоспособности

```bash
# Проверка прав доступа
upkgt check permissions

# Проверка доступа к директориям
upkgt check directories

# Проверка конфигурации
upkgt check config
```

### Обновление

#### Обновление из исходного кода

```bash
# Переход в директорию проекта
cd upkgt

# Получение последних изменений
git pull

# Сборка новой версии
./build.sh clean
./build.sh build

# Установка новой версии
sudo mv bin/upkgt /usr/local/bin/
```

#### Обновление конфигурации

```bash
# Обновление конфигурационного файла
upkgt config update

# Проверка конфигурации
upkgt config verify
```

### Удаление

#### Удаление программы

```bash
# Удаление бинарного файла
sudo rm /usr/local/bin/upkgt

# Удаление конфигурации
rm -rf ~/.config/upkgt

# Удаление логов
sudo rm -rf /var/log/upkgt

# Удаление кэша
sudo rm -rf /var/cache/upkgt

# Удаление резервных копий
sudo rm -rf /var/backups/upkgt
```

#### Очистка окружения

```bash
# Удаление автодополнения из bash
sed -i '/upkgt completion bash/d' ~/.bashrc

# Удаление автодополнения из zsh
sed -i '/upkgt completion zsh/d' ~/.zshrc
```

### Примечания

#### Устранение проблем

* Если возникают проблемы с правами доступа, проверьте владельца директорий
* При ошибках сборки проверьте версию Go и наличие всех зависимостей
* Логи установки находятся в `/var/log/upkgt/install.log`

#### Безопасность

* Всегда проверяйте источник кода перед установкой
* Используйте только официальный репозиторий
* Создавайте резервные копии перед обновлением
