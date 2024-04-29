<p align="center">
  <a href="https:/resto-go.ru/restaurants" rel="noopener" target="_blank"><img width="150" src="https://resto-go.ru/assets/logo.svg" alt="Resto UI Logo"></a>
</p>

<h1 align="center">Resto UI</h1>

**RestoUI** contains foundational Resto UI component libraries for shipping new features faster.

## Installation and usage

Install the **resto-ui** package with [NPM](https://www.npmjs.org/):

```sh
npm install resto-ui
```

### Notification

Display a notification message at any of the four corners of the viewport

```js
import { Notification } from 'resto-ui';

Notification.open({
  duration: 3,
  title: 'Title',
  description: 'Description',
  type: 'success',
});
```

```Duration``` can be used to specify how long the notification stays open. Default value is 3 seconds. If you set the value to 0, the notification box will never close automatically.

A notification box can appear from the ```topLeft topRight bottomLeft or bottomRight``` of the viewport via ```position```.
