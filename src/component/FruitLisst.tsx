import { color,FruitProps } from "../type";
import Fruit from "./Fruit";

const list : FruitProps[]=[
    { id: 1, nom: 'Pomme', couleur: color.rouge },
    { id: 2, nom: 'Banane', couleur: color.vert },
    { id: 3, nom: 'Raisin', couleur: color.bleu },
];

const FruitList: React.FC = () => {
    return (
        <div>
            {list.map((fruit) => (
                <Fruit key={fruit.id} {...fruit} />
            ))}
        </div>
    );
};
export default FruitList;