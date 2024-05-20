import { RegisterOptions } from "react-hook-form";

export class ProductModel {
	public id: number;
    public name: string;
    public price: number;
    public stock: number;
    public imageUrl: string;
    public image: File;
    
    public static nameValidation: RegisterOptions = {
        required: {value: true, message: "Missing name."},
        minLength: {value: 2, message: "Name too short."},
        maxLength: {value: 100, message: "Name too long."}
    }

    public static priceValidation: RegisterOptions = {
        required: {value: true, message: "Missing price."},
        min: {value: 0, message: "Minimum price is 0."},
        max: {value: 100, message: "Maximum price is 100."}
    }

    public static stockValidation: RegisterOptions = {
        required: {value: true, message: "Missing stock."},
        min: {value: 0, message: "Minimum stock is 0."},
        max: {value: 100, message: "Maximum stock is 100."}
    }

    public static imageValidation: RegisterOptions = {
        required: {value: true, message: "Missing image."}
    }
}