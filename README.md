# Timer

## Recommended Node Version:

```
10.5
```

### Development:

```sh
npm install
npm run start
```

## Production:

```sh
npm run build
```

## Brief

`main.ts` is the main file with Timer class which expose public methods. In order to initialize the app, you need to instantiate class and provide optional `TimerConfig` file:

- time /number/ - in seconds from which the counter should start

## How to use it

Before the App can be used it has to be `built` and hosted in the cloud or inside the project that will utilize it. It works like every other plugin.

1.  `timer.js` file has to be included in the project

    - Example: `<script src=”timer.js”>`

2.  Once `timer.js` file is included in the project, `Timer` class is available

3.  Use it in Your code through composition. Assign an instance to const `const timer = new Timer({})` and use it for your needs with the public API.

## Methods

- play() - start / resume timer

- pause() - stop / pause timer

## Getters

- time - computed time in seconds

- convertToTimeDisplay - returns time in the format `hhhh:mm:ss`;

## Example of use:

```sh
src/dev/index.html
src/dev/dev.ts
```
