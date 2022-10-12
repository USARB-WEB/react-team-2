import EmptyList from "./EmptyList";

const ListItems = ({ items, removeProduct, addProduct }) => {
  const Item = ({ id, name, inCart }) => {
    return (
      <li>
        <span>{name}</span>
        {inCart ? (
          <button onClick={() => removeProduct(id)}>Remove from cart</button>
        ) : (
          <button onClick={() => addProduct(id)}>Add to cart</button>
        )}
      </li>
    );
  };

  return items.length ? (
    <ul>
      {items.map(({ name, id, inCart }) => (
        <Item key={id} id={id} inCart={inCart} name={name} />
      ))}
    </ul>
  ) : (
    <EmptyList />
  );
};

export default ListItems;
