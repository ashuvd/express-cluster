# Проект cluster.app
## Fullstack developer - Шувалов Александр

## Скрипты package.json:

| Скрипт | Назначение |
| ------ | ------ |
| start  | Запуск сервера **Node.js** на порту **8001**. |
| dev  | Запуск сервера **Node.js** для разработки на порту **8001**, используя **nodemon**. |
| start-cluster  | Запуск сервера **Node.js** на порту **8000**. |
| dev-cluster  | Запуск сервера **Node.js** для разработки на порту **8000**, используя **nodemon**. |
| ddos  | Запуск **autocannon** c 1000 соединений. Измерение latency. |
| ddos-cluster  | Запуск **autocannon** c 1000 соединений. Измерение latency для сервера с **cluster**. |

#### Чтобы запустить скрипт:
```sh
$ npm run имя_скрипта
```

#### Чтобы запустить проект:
1) Устанавливаем все зависимости
    ```sh
    $ npm i
    ```
2) Устанавливаем глобально autocannon
    ```sh
    $ npm i -g autocannon
    ```
3) Запускаем сервер без cluster
    ```sh
    $ npm run start
    ```
4) Запускаем сервер c cluster
    ```sh
    $ npm run start-cluster
    ```
5) Проверяем latency для сервера без cluster, запустив скрипт
    ```sh
    $ npm run ddos
    ```
6) Проверяем latency для сервера c cluster, запустив скрипт
    ```sh
    $ npm run ddos-cluster
    ```
