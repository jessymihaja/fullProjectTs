import { FunctionComponent } from 'react';

interface ItemsListProps {
  list: Array<string | number>;
}

const ItemsList: FunctionComponent<ItemsListProps> = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default ItemsList;