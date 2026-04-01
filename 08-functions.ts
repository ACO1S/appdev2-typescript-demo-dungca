(() => {

    function add(a: number, b: number): number {
        return a + b
    }

    console.log(add(7, 13))

    function log(message: string): void {
        console.log(message)
    }

    log("Hi there!")  

    function performJob(cb: (m: string) => void) {
        cb('Task Complete!')
    }

    let logMsg = (msg: string): void => {
        console.log(msg)
    }

    performJob(logMsg)

    type User = {
        name: string;
        age: number;
        greet: () => string;
    }

    let user: User = {
        name: "Francois",
        age: 20,
        greet() {
            console.log(`Hello, ${this.name}`)
            return this.name
        }
    }

    user.greet()

})();