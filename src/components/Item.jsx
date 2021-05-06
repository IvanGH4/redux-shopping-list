import { useDispatch } from "react-redux";
import { checkItem, removeItem } from "../redux/actions/index";

import "./Items.css";

function Item({ item }) {
  const dispatch = useDispatch();

  return (
    <div
      key={item.id}
      className="d-flex align-items-center justify-content-between text-primary"
    >
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexCheckChecked"
          checked={item.done}
          onChange={() => dispatch(checkItem(item.id))}
          value={item.name}
        />
        <label
          className={`form-check-label ${item.done ? "bought text-dark" : ""}`}
          htmlFor="flexCheckChecked"
        >
          {item.name}
        </label>
      </div>
      {!item.done && (
        <button
          className="btn text-danger"
          onClick={() => dispatch(removeItem(item.id))}
        >
          <i className="fas fa-minus-circle"></i>
        </button>
      )}
    </div>
  );
}

export default Item;
