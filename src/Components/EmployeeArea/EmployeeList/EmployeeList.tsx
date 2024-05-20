import { useEffect, useState } from "react";
import { EmployeeModel } from "../../../Models/EmployeeModel";
import { employeeService } from "../../../Services/EmployeeService";
import "./EmployeeList.css";
import { notify } from "../../../Utils/notify";

export function EmployeeList(): JSX.Element {
    
    const [employees, setEmployees] = useState<EmployeeModel[]>([]);

    useEffect(()=>{
        employeeService.getAllEmployees()
        .then((value)=>{setEmployees(value)})
        .catch(err=>notify.error(err))
    }, []);
    
    return (
        <div className="EmployeeList">
			<table>
                {employees.map(e => 
                    <tr key ={e.id}> 
                        <th>{e.firstName}</th> 
                        <th>{e.lastName}</th> 
                        <th>{e.title}</th> 
                        <th>{e.country}</th> 
                        <th>{e.city}</th> 
                        <th>{e.birthDate}</th> 
                        <th><img src={e.imageUrl}/></th> 
                    </tr>
                )}
            </table>
                
        </div>
    );
}
