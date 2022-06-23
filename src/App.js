import './App.css';
import { Route } from 'react-router-dom';
import {Switch} from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Home from "./Container/Home/Home";
import Shop from "./Container/Shop/Shop";
import About from "./Container/About/About";
import Services from "./Container/Services/Services";
import Blog from "./Container/Blog/Blog";
import Contact from "./Container/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/shop"} exact component={Shop} />
          <Route path={"/about"} exact component={About} />
          <Route path={"/services"} exact component={Services} />
          <Route path={"/blog"} exact component={Blog} />
          <Route path={"/contact"} exact component={Contact} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
