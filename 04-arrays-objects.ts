let hobbies = ["Editing", "Watching"]

// hobbies.push(10)

// let userList: (string | number)[];
let userList: Array<string | number>;

userList = ["Francois", "Francois123", 123456]

// console.log(userList)

let user: {
    name: string;
    age: number;
    hobbies: Array<string>,
    role: {
        description: string,
        id: number
    }
} = {
    name: "Francois",
    age: 20,
    hobbies: ["Editing", "Watching"],
    role: {
        description: 'admin',
        id: 1
    }
}

// Must not null or undefined
let val: string = "Francois Dungca"

// Flexible Object - Record Type
let data: Record<string, number | string>

data = {
    1: 1,
    name: 'Francois'
    // isPartTimeInstructor: true
};

console.log("Name:", user.name);
console.log("Age:", user.age);
console.log("Hobbies:", user.hobbies);