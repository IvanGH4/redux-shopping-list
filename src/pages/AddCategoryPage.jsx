import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCategory } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

function AddCategoryPage() {
  const [categoryName, setCategoryName] = useState("");
  const categories = useSelector((state) => state.categoryReducer);

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      addCategory({
        name: categoryName,
        id: uuidv4(),
        createdAt: moment().format("D - M - YYYY"),
      })
    );
    setCategoryName("");
  }

  return (
    <div className="container">
      <div className="row justify-content-center py-5">
        <Link to="/" className="text-decoration-none text-light">
          <i className="fas fa-arrow-left"></i> Go back
        </Link>
        <div className="col-md-4">
          <h4>Add a new category</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Category name..."
              className="form-control"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </form>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h5 className="text-light">Current categories</h5>
          <ul className="list-group">
            {categories &&
              categories.map((category) => {
                return (
                  <li key={category.id} className="list-group-item">
                    {category.name}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AddCategoryPage;
