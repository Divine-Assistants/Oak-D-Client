export interface User {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,

}

export interface VerificationCode {
    email: string,
    code: string,
}