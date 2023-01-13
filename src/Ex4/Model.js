import React, { Component } from "react";
import "./Model.css";
import {connect} from "react-redux"
class Model extends Component {
  render() {
    return (
      <div
        className="contain p-2git"
        style={{
          backgroundImage : `url(${this.props.selectedProduct.background})`
        }}
      >
        <div
          className="body"
          style={{
            backgroundImage: "url(images/allbody/bodynew.png)",
          }}
        />
        <div
          className="model"
          style={{
            backgroundImage: "url(images/model/1000new.png)",
          }}
        />
        <div
          className="bikinitop"
          style={{
            backgroundImage: "url(images/allbody/bikini_branew.png)",
          }}
        />

        <div
          className="bikinibottom"
          style={{
            backgroundImage: "url(images/allbody/bikini_pantsnew.png)",
          }}
        />

        <div
          className="feetleft"
          style={{
            backgroundImage: "url(images/allbody/feet_high_leftnew.png)",
          }}
        />
        <div
          className="feetright"
          style={{
            backgroundImage: "url(images/allbody/feet_high_rightnew.png)",
          }}
        />


        <div
          className="bikinitop"
          style={{
            backgroundImage:  `url(${this.props.selectedProduct.topclothes})`,
             backgroundSize:"cover"
          }}
        />

        <div
          className="bikinibottom"
          style={{
            backgroundImage:  `url(${this.props.selectedProduct.botclothes})`,
            backgroundSize:"cover"
          }}
        />

        <div
          className="shoes"
          style={{
            backgroundImage:  `url(${this.props.selectedProduct.shoes})`,
            backgroundSize:"cover"
          }}
        />
        <div
          className="handbag"
          style={{
            backgroundImage:  `url(${this.props.selectedProduct.handbags})`,
            backgroundSize:"cover"
          }}
        />
        <div
          className="necklace"
          style={{
            backgroundImage:  `url(${this.props.selectedProduct.necklaces})`,
            backgroundSize:"cover"
          }}
        />
        <div
          className="hairstyle"
          style={{
            backgroundImage:  `url(${this.props.selectedProduct.hairstyle})`,
           
          }}
        />
        <button
        className="btn btn-danger"
        onClick={()=>this.props.dispatch({
          type:"category/RESET"
        })}
        >
            Reset all
        </button>
      
      </div>

    );
  }
}

const mapStateToProps = (state)=>{
  return {
    selectedProduct:state.productReducer.selectedProduct,
  }
}
export default connect(mapStateToProps)(Model)
