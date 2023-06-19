import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="row d-flex align-items-center justify-content-center">
      {items.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};
  
  export default ItemList;