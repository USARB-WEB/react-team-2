const Item = ({ name, removeProduct, id, addProduct, inCart }) => {
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

export default Item;
