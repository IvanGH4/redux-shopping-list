import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ItemsPage from "./pages/ItemsPage";
import AddCategoryPage from "./pages/AddCategoryPage";
import CategoriesPage from "./pages/CategoriesPage";

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Switch>
        <Route path="/category/:name" component={ItemsPage} />
        <Route path="/category" component={AddCategoryPage} />
        <Route path="/categories" component={CategoriesPage} />
      </Switch>
    </Router>
  );
}

export default App;
