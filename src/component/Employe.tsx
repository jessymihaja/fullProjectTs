import { EmployeProps } from "../type";


const Employe = ({id,nom,job,picUrl} : EmployeProps) =>{
    return(
        <div>
            <p>{id}</p>
            <p>{nom}</p>
            <p>{job}</p>
            <img src={picUrl} alt={nom} height={150} width={150} />
        </div>
    )
}
export default Employe;