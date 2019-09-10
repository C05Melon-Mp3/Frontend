export class SignUpInfo {
    
        name: string;
        username: string;
        email: string;
        role: string[];
        password: string;
        age: number;
        gender: string;
        numberPhone: string;
        address: string;
       
        constructor(name: string, username: string, email: string, password: string, age: number, numberPhone:string, gender:string,address:string) {
            this.name = name;
            this.username = username;
            this.email = email;
            this.password = password;
            this.age = age,
            this.numberPhone = numberPhone,
            this.gender = gender,
            this.address = address
            this.role = ['user'];
        }
    }
    