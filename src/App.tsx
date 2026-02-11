import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Search from "./pages/search/Search";

const App = () => {
  return <div>
    <Navbar />
    <Search />
    <Home />
  </div>;
};
export default App;