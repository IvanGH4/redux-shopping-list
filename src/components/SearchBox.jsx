import { useState } from "react";
import { setSearch } from "../redux/actions";
import { useDispatch } from "react-redux";

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  function handleChange(e) {
    setSearchTerm(e.target.value);
    dispatch(setSearch(e.target.value));
  }

  return (
    <div className="row d-flex justify-content-center my-2">
      <div className="col-md-4">
        <form onSubmit={(e) => e.preventDefault()} className="shadow">
          <input
            type="text"
            placeholder="Search item..."
            className="form-control"
            onChange={handleChange}
            value={searchTerm}
          />
        </form>
      </div>
    </div>
  );
}

export default SearchBox;
