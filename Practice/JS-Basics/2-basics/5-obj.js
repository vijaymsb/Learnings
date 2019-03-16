// There are two categories for giving values to a variable
// 1.Value types (or) Primitives
// 2.Reference types

// Reference types are
// a.Objects
// b.Arrays
// c.Functions

// Objects

// let name = 'Vijay';
// let age = 27;

// Insted of using many variables we use Objects

let person = {
    name: 'vijay',
    age: 27
};
// We can read the object properties in two ways
// 1.Dot notation
person.name = 'Madhu';
// 2.Bracket notation
person['name'] = 'Kumar';

console.log(person);