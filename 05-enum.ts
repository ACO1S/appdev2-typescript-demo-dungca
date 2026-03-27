enum Role {
    SuperAdmin = 'SuperAdmin',
    Teacher = 'Teacher',
    Student = 'Student',
}

interface User {
    name: string;
    role: Role;
}

const users: User[] = [
    { name: "Lovely", role: Role.SuperAdmin },
    { name: "Marga", role: Role.Teacher },
    { name: "Shobe", role: Role.Student },
];

function getDashboard(user: User): string {
    switch (user.role) {
        case Role.SuperAdmin:
            return `${user.name} sees SuperAdmin Dashboard`;
        case Role.Teacher:
            return `${user.name} sees Teacher Dashboard`;
        case Role.Student:
            return `${user.name} sees Student Dashboard`;
        default:
            return `${user.name} has no access`;
    }
}

for (const user of users) {
    console.log(getDashboard(user));
}