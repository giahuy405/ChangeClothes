import React, { Component } from "react";
import { connect } from "react-redux";
class ProductItem extends Component {
  handleTryClothes = (type,img) => {
    this.props.dispatch({
      type:'product/TRY_CLOTHES',
      payload:{
        type,
        img
      }
    })
  }
  render() {
    const { type, imgSrc_jpg, name,imgSrc_png } = this.props.product;
    return (
      <div className="card p-2 mb-4">
        <img alt="" src={imgSrc_jpg} />
        <h3>{name}</h3>
        <button
        onClick={()=>this.handleTryClothes(type,imgSrc_png)}
        className="btn btn-info">Mặc thử</button>
      </div>
    );
  }
}

export default connect()(ProductItem)

