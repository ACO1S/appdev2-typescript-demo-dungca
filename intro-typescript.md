# TypeScript Documentation
Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally
```
npm install -g typescript
```

## What is Typescript
TypeScript is a superset of JavaScript that adds static typing and compiles to plain JavaScript.


## Why use Typescript
- Adds type safety
- Improves tooling and developer experience
- Helps maintain large projects
- Supports modern JavaScript features

## How to Compile a TypeScript File to JavaScript
```bash
tsc filename.ts
```

## How to Add Restriction if Errors Exist
```
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
```

## 01-basics.ts
Demonstrates explicit typing for variables (string and number), default function parameters, and shows type safety by highlighting invalid assignments (commented-out code would cause errors).

## 02-vanilla-js-types.js
Shows how JavaScript’s typeof operator works at runtime to check the type of a variable without explicit TypeScript types.

## 03-flexible-types.ts
Illustrates the any type, allowing a variable to be reassigned to different types (number, string, boolean, object, array), demonstrating flexibility and potential type safety issues.

## 04-arrays-objects.ts
Covers typed arrays with union types, nested object types, non-nullable variables, and the Record type for flexible key-value objects.

## 05-enum.ts
Introduces string enums with TypeScript, defines a typed User interface, and demonstrates role-based logic using a switch statement to control access.

## 06-alternative-to-enum.ts
Demonstrates TypeScript’s union types for user roles and a function that grants system access based on the role.

## 07-custom-type-role

Shows how object types and role-based logic determine what actions a user can perform.

## 08-functions.ts
Illustrates function definitions, callbacks, arrow functions, and custom object types with methods in TypeScript.

## 09-special-types.ts
Demonstrates TypeScript’s handling of null and undefined types, including nullable variables.

## 10-form.html and 10-type-narrowing.ts
Implements a basic HTML form with JavaScript that greets the user without reloading the page. It shows safe access to a possibly null input element in TypeScript/Node.js using type assertions and optional chaining.

## 11-optional.ts
Demonstrates optional object properties and how to provide default values for empty or undefined user input using ?? and || operators in TypeScript.