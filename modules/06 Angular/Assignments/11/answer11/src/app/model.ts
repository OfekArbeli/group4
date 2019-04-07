export class SignIn {
    constructor(
        public userName: string,
        public password: string
    ){}
}
export class SignUp {
    constructor(
        public fullName: string,
        public email: string,
        public age: number,
        public userName: string,
        public password: string
    ){}
}
export class Password {
    constructor(
        public email: string,
        public repitEmail: string
    ){}
}