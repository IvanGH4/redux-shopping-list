import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ListLink({ bg, title, date, slug }) {
  const items = useSelector((state) => state.itemReducer);

  const [categoryItems, setCategoryItems] = useState([]);
  const [categoryDoneItems, setCategoryDoneItems] = useState([]);

  useEffect(() => {
    let ctgryItems = items.filter((item) => item.category === slug);
    setCategoryItems([...ctgryItems]);
  }, []);

  useEffect(() => {
    let doneItems = categoryItems.filter((item) => item.done);
    setCategoryDoneItems([...doneItems]);
  }, [categoryItems]);

  return (
    <Link className="text-decoration-none text-light" to={`/category/${slug}`}>
      <div className="row justify-content-center mb-3">
        <div className={`col-md-4 rounded shadow bg-${bg}`}>
          <div className="d-flex justify-content-between align-items-center">
            <h3>{title}</h3>
            <p>{categoryDoneItems.length + "/" + categoryItems.length}</p>
          </div>
          <div>
            <small>Created at {date}</small>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ListLink;
