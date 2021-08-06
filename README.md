# Apollo and GraphQL for Vue.js

Небольшая правка типов [Vue Apollo 3](https://apollo.vuejs.org/) для случая, когда библиотека используется вместе с Apollo Client 3 и Vue 2 ([случай ручной установки](https://apollo.vuejs.org/guide/installation.html#manual-installation)). ```d.ts``` - файлы самой библиотеки импортируют типы из Apollo Client 2, что в некоторых случаях приводит к ошибкам TypeScript. Фикс просто подменяет эти импорты на соответствующие импорты из ```@apollo/client``` (Apollo Client 3).

На данный момент Vue Apollo 4 (который использует Apollo Client 3) находится в альфа-версии, и обновление несколько месяцев назад сломало совместимость с Vue 2 (теперь библиотека Vue 3 Only). Если в стабильном релизе совместимость со старыми версиями Vue восстановят, форк больше не нужен.

Установка:

```shell
yarn add https://github.com/palshin/vue-apollo
```

Дальше все по [этой инструкции](https://v4.apollo.vuejs.org/guide-option/setup.html#_1-install-vue-apollo-option) за исключением пункта 4. Плагин интегрируем в Vue так же, как это делается в [Vue Apollo 3](https://apollo.vuejs.org/guide/installation.html#_3-apollo-provider).