import { FruitProps } from "../type"
const Fruit : React.FunctionComponent<FruitProps> = ({id,nom,couleur} : FruitProps) => {
    return(
        <div>
            <p>{nom}</p>
            <p>{couleur}</p>
        </div>
    )
}
export default Fruit
