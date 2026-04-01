(() => {
    let userRole: 'admin' | 'guest' | 'teacher' | 'student' = 'teacher'

    userRole = 'student'

    function access(role: 'admin' | 'guest' | 'teacher' | 'student') {
        console.log(`User with role ${role} can access the system.`)
    }

    access('admin')
    access('student')
})()