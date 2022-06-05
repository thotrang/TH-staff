class Staff {
    name: string;
    age: number;
    email: string;
    constructor(_name: string, _age: number, _email: string) {
        this.name = _name;
        this.email = _email;
        this.age = _age;
    }
    get Name() {
        return this.name;
    }

    get Email() {
        return this.email;
    }

    get Age() {
        return this.age;
    }

    set Name(_name) {
        this.name = _name;
    }

    set Email(_email) {
        this.email = _email;
    }

    set Age(_age) {
        this.age = _age;
    }
}
let staff = new Staff('Staff 1', 20, 'staff@gmail.com');
let nameStaff = staff.Name;


console.log(nameStaff); // Staff 1


staff.Name='Staff 2';


let currentNameStaff = staff.Name;


console.log(currentNameStaff)