import { RegisterOptions } from "react-hook-form";

export class CredentialsModel {
	public email: string;
    public password: string;

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