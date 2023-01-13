import React, { Component } from "react";
import { connect } from "react-redux";
import clsx from "clsx"
class Category extends Component {
  handleChange = (type) => {
    this.props.dispatch({
      type:"category/SET_SELECTED_PRODUCT",
      payload:type
    })
  }

  render() {
    return (
      <div className="btn-group d-flex justify-content-center">
        {this.props.buttonArray.map(item =>
          <button onClick={()=>this.handleChange(item.type)} key={item.type} 
          className={clsx('btn btn-info',{
            'btn-danger': item.type===this.props.selectedProduct
          })}>
            {item.showName}
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    buttonArray: state.categoryReducer.buttonArray,
    selectedProduct:state.categoryReducer.selectedProduct
  }
}
export default connect(mapStateToProps)(Category)
