import ListLink from "../components/ListLink";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function CategoriesPage() {
  const categories = useSelector((state) => state.categoryReducer);
  const user = useSelector((state) => state.userReducer);
  const colors = ["success", "warning", "secondary", "info", "danger"];

  let dispatch = useDispatch();

  return (
    <div className="container">
      <h2 className="text-center fw-bold">My shopping list</h2>
      <h4 className="text-center fw-light text-light">
        {user && user.username}
      </h4>
      <div className="row justify-content-center">
        <div className="col-md-4 d-flex align-items-center justify-content-between">
          <h4>Add a category</h4>
          <Link className="btn btn-primary fs-4" to="/category">
            <i className="fas fa-plus-circle"></i>
          </Link>
        </div>
      </div>
      {categories.length > 0 ? (
        categories.map((category) => {
          return (
            <ListLink
              bg={colors[Math.floor(Math.random() * colors.length)]}
              title={category.name}
              date={category.createdAt}
              key={category.id}
              slug={category.slug}
            />
          );
        })
      ) : (
        <p className="text-center text-info">No categories added yet.</p>
      )}
    </div>
  );
}

export default CategoriesPage;
