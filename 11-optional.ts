(() => {
    type Person = {
        fullName: string;
        age: number;
        occupation?: 'developer' | 'designer' | 'manager';
    }

    const person: Person = {
        fullName: 'Francois Dungca',
        age: 21
    }

    console.log('Name:', person.fullName);
    console.log('Age:', person.age);
    console.log('Occupation:', person.occupation);
})();

let userInput = '';

const providedInput = userInput !== '' ? userInput : 'Default Input';
console.log('Using ?? operator:', providedInput);

const providedInputOr = userInput || 'Default Input';
console.log('Using || operator:', providedInputOr);