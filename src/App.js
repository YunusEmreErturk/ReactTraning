import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: []
  };
  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  componentDidMount() {
    this.getProducts();
  }

  addToProductInCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(item => item.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id);
    this.setState({ cart: newCart });
  };

  getProducts = categoryId => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  };

  render() {
    let productInfo = {
      title: "Product List Title"
    };

    let categoryInfo = {
      title: "Category List Title"
    };
    return (
      <div className="App">
        <Container>
          <Navi removeFromCart ={this.removeFromCart} cart={this.state.cart}></Navi>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              ></CategoryList>
            </Col>
            <Col xs="9">
              <ProductList
                addToProductInCart={this.addToProductInCart}
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={productInfo}
              ></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
