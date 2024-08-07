import React, { FunctionComponent } from "react";
import Employe from "../component/Employe";
import { EmployeProps } from "../type";
import { Alert, Spinner } from "react-bootstrap";
interface employeListprops{
    list : Array<EmployeProps> 
    isLoading : boolean
    error : any
    
}


const EmployeList : FunctionComponent<employeListprops> = ({list,isLoading,error}) => {
    if (isLoading) return <p>Loading<Spinner animation="grow"></Spinner></p>;
    if (error) return <Alert key={'warning'} variant='warning'><p>Error: {error.message}</p></Alert>;
  return(
    <div>
        {list&&list.map((emp) => (
            <Employe id={emp.id} nom={emp.nom} job={emp.job} picUrl={emp.picUrl} key={emp.id}></Employe>
        ))}
    </div>
  )


}
export default EmployeList;
