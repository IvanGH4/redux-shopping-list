import InputBox from "../components/InputBox";
import SearchBox from "../components/SearchBox";
import ItemsList from "../components/ItemsList";

function ItemsPage() {
  return (
    <div className="container">
      <InputBox />
      <SearchBox />
      <ItemsList />
    </div>
  );
}

export default ItemsPage;
