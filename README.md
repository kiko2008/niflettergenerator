<img src="https://raw.githubusercontent.com/kiko2008/niflettergenerator/master/resources/logo.png" height="180" alt="niflettergenerator" />

[![npm version](https://badge.fury.io/js/niflettergen.svg)](https://badge.fury.io/js/niflettergen)

Modulo de npm que genera la letra de un numero de identificacion fiscal.

Para utilizarlo solo tenemos que instalar el paquete en nuestro proyecto:
```bash
npm i niflettergen
```

Posteriormente requeriremos el modulo y llamaremos a la funcion generate:
```bash
const letterGenerator = require('niflettergen');
console.log(letterGenerator.generate(2267887));
```