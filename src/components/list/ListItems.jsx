import EmptyList from "./EmptyList";
import Item from "./Item";

const ListItems = ({ items, removeProduct, addProduct }) => {
  return items.length ? (
    <ul>
      {items.map(({ name, id, inCart }) => (
        <Item
          key={id}
          id={id}
          inCart={inCart}
          name={name}
          removeProduct={removeProduct}
          addProduct={addProduct}
        />
      ))}
    </ul>
  ) : (
    <EmptyList />
  );
};

export default ListItems;
