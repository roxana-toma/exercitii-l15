import chalk from "chalk";
//import _ from "underscore";

// ! LECTIA 15
// * 1. Node.js: Scrieți un script simplu care să ruleze în Node.js.
// Acesta ar putea fi, de exemplu, un script care să afișeze "Hello, World!" în consolă.

console.log(chalk.blue("Hello World!"), chalk.red("Roxana aabbbdd"));

// * 2. * Inițializarea unui proiect: Inițializați un nou proiect folosind npm init.
// Completați câmpurile necesare pentru a genera un fișier package.json. (install chalk)
//console.log(
//chalk.blue("Hello World Paul 321321!"),
//chalk.red("Denis 321312 1231232 3123121")
//);

// * 3. Comanda NPM: Creați un nou proiect și instalați un pachet folosind npm.
// Un exemplu bun ar fi pachetul lodash. Verificați dacă pachetul a fost instalat corect.

//* 4. Scripturi npm: Adăugați un script în package.json care să ruleze fișierul
// JavaScript principal al aplicației folosind comanda node.

// * 5. Instalarea pachetelor: Instalați un pachet suplimentar în proiectul dvs.
// Poate fi, de exemplu, pachetul express.

// * 6. Ștergerea pachetelor: Încercați să dezinstalați pachetul pe care l-ați instalat la punctul anterior.

// * 7. Instalarea unei versiuni specifice a unui pachet: Încercați să instalați o
// anumită versiune a pachetului lodash, de exemplu versiunea 4.17.1.

// * 8. Tipuri de dependințe: Instalați un pachet ca dependință de dezvoltare.
// Un bun exemplu este pachetul nodemon, care este util pentru dezvoltarea aplicațiilor Node.js.
//const person = { name: "Denis", age: 30 };
//const testing = [1, 23, 4, 5];
//console.log("Este obiect?", _.isObject(person));
//console.log("Este obiect? testing", _.isArray(testing));
//console.log("Este number? testing", _.isNumber(testing));

// 9. Named Export
// Să presupunem că avem un modul care exportă o clasă Person și o funcție createPerson.
// Acum, într-un alt fișier, importăm clasa Person și funcția createPerson,
// creăm o nouă persoană și o lăsăm să se prezinte.
// import { Person, createPerson, testingFromClass } from "./personClass.js";

// console.log(testingFromClass);

// const denis = createPerson("Paul", 30);
// const alex = new Person("Alex", 31);

// console.log(denis);
// console.log(alex);

//import * as personModule from "./personClass.js";
// console.log(personModule);
//console.log(personModule.testingFromClass);
//console.log(personModule.createPerson("Darius", 40));

// 10. Default Export
// Vom crea un modul care exportă implicit o clasă MathUtils care
// are câteva metode statice pentru operații matematice.
// Într-un alt fișier, importăm clasa MathUtils și folosim metodele sale pentru a efectua câteva operații matematice.
//import MathUtils from "./mathClass.js";
//console.log(MathUtils.adunare(1, 1));
//console.log(MathUtils.scadere(20, 10));
//console.log(MathUtils.inmultire(5, 5));
