# Bernoulli Mukuna - Glean Technical Pre-Interview test

## How to run the exercises
The exercises have all been completed using TypeScript. This README file has been included as a guide
to running of the exercises:

1. The first step is install the packages using the command
```js
npm install
```

2. Once the packages have been installed, you can start testing the files. As mentioned above, the codes
are written in TypeScript, so the first step will be conversion to JavaScript:
```js
tsc __questions__/<filename>.ts
```

3. Finally, the tests can the be run using the command below
```js
node __questions__/<filename>.js
```

For question, there is a test file included (testing with jest). Use the command below to run the test:
```js
npm test
```