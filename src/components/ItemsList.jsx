import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";

function ItemsList() {
  let { name } = useParams();
  console.log(name);
  // const items = useSelector((state) =>
  //   state.itemReducer.map((item) => item.category === name)
  // );
  const items = useSelector((state) => state.itemReducer);

  const searchTerm = useSelector((state) => state.searchReducer);

  const [products, setProducts] = useState([]);

  function searchItems() {
    let searchedItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(searchedItems);
  }

  function handleClick(status) {
    if (status === "DONE") {
      let doneItems = items.filter((item) => item.done);
      setProducts([...doneItems]);
    } else if (status === "PENDING") {
      let pendingItems = items.filter((item) => !item.done);
      setProducts([...pendingItems]);
    } else {
      setProducts([...items]);
    }
  }

  useEffect(() => {
    setProducts([...items]);
  }, [items]);

  useEffect(() => {
    searchItems();
  }, [searchTerm]);

  return (
    <div className="row justify-content-center">
      <div className="col-md-4 my-3 bg-light rounded p-4">
        <div className="d-flex justify-content-around align-items-center border-bottom">
          <button className="btn" onClick={() => handleClick("ALL")}>
            All
          </button>
          <button className="btn" onClick={() => handleClick("DONE")}>
            Bought
          </button>
          <button className="btn" onClick={() => handleClick("PENDING")}>
            Not bought
          </button>
        </div>
        {products.length > 0
          ? products
              .filter((item) => item.category === name)
              .map((item) => {
                return <Item key={item.id} item={item} />;
              })
          : "No items found that match with this category"}
      </div>
    </div>
  );
}

export default ItemsList;
