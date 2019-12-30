import React from 'react';
import { Helmet } from "react-helmet";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer"
import "../assets/scss/container.scss"
import Home from "../pages/home/Home";
import ProductList from "../pages/product/ProductList";
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";

function Layout() {
 // let match = useRouteMatch();
  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Staples</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <Router>
      <Header />
      <div className="main-wrapper">
       
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/category/:id" component={ProductList} />
          </Switch>
       

      </div>
      <Footer />
      </Router>
    </div>

  );
}



export default Layout;
