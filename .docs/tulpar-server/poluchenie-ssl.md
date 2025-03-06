# Получение SSL

## SSL-сертификат: Как создать .jks

Meigo отредактировал эту страницу 6 января · 1 редакция

### Введение

В Tulpar-Server используется свой формат сертификатов `.jks`. Вот как его сделать из обычного сертификата, созданного, например, с помощью Let's Encrypt (certbot).

### Создание .jks сертификата

#### Шаг 1: Экспортируйте сертификат в формат PKCS12

Выполните следующую команду OpenSSL для экспорта сертификата и приватного ключа в формате PKCS12:

```bash
openssl pkcs12 -export \
  -in /etc/letsencrypt/live/example.com/fullchain.pem \
  -inkey /etc/letsencrypt/live/example.com/privkey.pem \
  -out keystore.p12 \
  -name tulpar
```

#### Шаг 2: Конвертируйте PKCS12 в JKS

Используйте KeyTool для импорта сертификата из формата PKCS12 и конвертации его в формат JKS:

```bash
keytool -importkeystore \
  -srckeystore keystore.p12 \
  -srcstoretype PKCS12 \
  -destkeystore keystore.jks \
  -deststoretype JKS
```

KeyTool находится в JDK (Java Development Kit).

### Подключение сертификата к Tulpar-Server

Теперь вы можете подключить сертификат в `config.json`. Для этого требуется указать путь к нему, а также пароль от сертификата.

```json
{
  "ssl": {
    "keystore": "path/to/keystore.jks",
    "storepass": "your_keystore_password"
  }
}
```
