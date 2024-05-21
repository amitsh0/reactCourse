import { useForm } from "react-hook-form";
import { EmployeeModel } from "../../../Models/EmployeeModel";
import "./AddEmployee.css";
import { useNavigate } from "react-router-dom";
import { employeeService } from "../../../Services/EmployeeService";
import { notify } from "../../../Utils/notify";

export function AddEmployee(): JSX.Element {
    
    const {register, handleSubmit, formState }= useForm<EmployeeModel>();

    const navigate = useNavigate();

    async function send(employee: EmployeeModel){
        try{
            employee.image = (employee.image as unknown as FileList)[0];
            console.log(employee);
            await employeeService.addEmployee(employee);
            console.log("wont written");
            notify.success("employee added");
            navigate("/employees"); //to change!!!!!!!!
        }
        catch(err: any){
            console.log("will be written");
            notify.error(err);
        }
    }
    
    return (
        <div className="AddEmployee">
			<form onSubmit={handleSubmit(send)}>
                <label>First name: </label>
                <input type="text" {...register("firstName", EmployeeModel.Validation)}/>
                <span className="error">{formState.errors?.firstName?.message}</span>
                
                <label>Last name: </label>
                <input type="text" {...register("lastName", EmployeeModel.Validation)}/>
                <span className="error">{formState.errors?.lastName?.message}</span>

                <label>Title: </label>
                <input type="text" {...register("title", EmployeeModel.Validation)}/>
                <span className="error">{formState.errors?.title?.message}</span>

                <label>Country: </label>
                <input type="text" {...register("country", EmployeeModel.Validation)}/>
                <span className="error">{formState.errors?.country?.message}</span>

                <label>City: </label>
                <input type="text" {...register("city", EmployeeModel.Validation)}/>
                <span className="error">{formState.errors?.city?.message}</span>

                <label>birthDate: </label>
                <input type="text" {...register("birthDate", EmployeeModel.Validation)}/>
                <span className="error">{formState.errors?.birthDate?.message}</span>

                <label>Image: </label>
                <input type="file" {...register("image", EmployeeModel.Validation)}/>
                <span className="error">{formState.errors?.image?.message}</span>

                <button>Add</button>

            </form>
        </div>
    );
}
