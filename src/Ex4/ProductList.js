import React, { Component } from "react";
import ProductItem from "./ProductItem";
import { connect } from "react-redux"
class ProductList extends Component {
  render() {
    return (
      <div className="row mt-3">
        {this.props.products
        .filter(item=>item.type===this.props.selectedProduct)
        .map(item =>
          <div className="col-4" key={item.id}>
            <ProductItem product={item} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productReducer.products,
    selectedProduct:state.categoryReducer.selectedProduct,
  }
}
export default connect(mapStateToProps)(ProductList);