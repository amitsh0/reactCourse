import axios, { AxiosRequestConfig } from "axios";
import { EmployeeModel } from "../Models/EmployeeModel";
import { appConfig } from "../Utils/AppConfig";
import { ProductModel } from "../Models/ProductModel";

class EmployeeService {
	public async getAllEmployees(){
        const response = await axios.get<EmployeeModel[]>(appConfig.employeesUrl);
        const employees = response.data;
        return employees;
    }
    
    public async addEmployee(employee: EmployeeModel){
        //send product to server
        const options: AxiosRequestConfig = {headers: {"Content-Type": "multipart/form-data"}};
        const response = await axios.post<ProductModel>(appConfig.employeesUrl, employee, options);
        const dbProduct = response.data;

        // // add to global state
        // const action = productActions.addProduct(dbProduct);
        // store.dispatch(action);
    }
}

export const employeeService = new EmployeeService();
