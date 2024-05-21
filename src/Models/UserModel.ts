import { RegisterOptions } from "react-hook-form";

export class UserModel {
	public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public role: string;

    public static firstNameValidation: RegisterOptions = {
        required: {value: true, message: "Missing first name."},
        minLength: {value: 2, message: "First name too short."},
        maxLength: {value: 20, message: "First name too long."}
    }

    public static lastNameValidation: RegisterOptions = {
        required: {value: true, message: "Missing last name."},
        minLength: {value: 2, message: "Last name too short."},
        maxLength: {value: 20, message: "Last name too long."}
    }

    public static emailValidation: RegisterOptions = {
        required: {value: true, message: "Missing email."},
        minLength: {value: 4, message: "email too short."},
        maxLength: {value: 100, message: "email too long."}
    }

    public static passwordValidation: RegisterOptions = {
        required: {value: true, message: "Missing password."},
        minLength: {value: 4, message: "password too short."},
        maxLength: {value: 20, message: "password too long."}
    }
}



