let user1 = { name: 'Francois', role: 'student' };
let user2 = { name: 'Dungca', role: 'teacher' };

function access(user: {name: string, role: string}) {
    if(user.role === 'teacher') console.log(`${user.name} can manage classes.`);
    else console.log(`${user.name} can view their own progress.`);
}

access(user1); // Francois
access(user2); // Dungca