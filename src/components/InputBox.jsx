import { useState } from "react";
import { addItem, removeAllItems, removeCategory } from "../redux/actions";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useParams, Link, useHistory } from "react-router-dom";

import "./InputBox.css";

function InputBox() {
  const [inputVal, setInputVal] = useState("");

  const dispatch = useDispatch();

  const history = useHistory();

  let { name } = useParams();

  function handleSubmit(e) {
    e.preventDefault();
    let item = {
      id: uuidv4(),
      name: inputVal,
      bought: false,
      category: name,
    };
    setInputVal("");
    dispatch(addItem(item));
  }

  function handleClick() {
    dispatch(removeAllItems(name));
    dispatch(removeCategory(name));
    history.push("/categories");
  }

  return (
    <div className="row justify-content-center">
      <div className="d-flex justify-content-around align-items-center">
        <div>
          <Link to="/" className="text-decoration-none text-light">
            Home
          </Link>
          <Link
            to="/categories"
            className="text-decoration-none text-light ms-3"
          >
            Back
          </Link>
        </div>
        <button className="btn fs-4 text-danger" onClick={handleClick}>
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
      <div className="col-md-4">
        <form
          className="add-form d-flex justify-content-between align-items-center"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            type="text"
            placeholder="Add item"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button className="btn" type="submit">
            <i className="fas fa-plus-circle"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputBox;
