import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReviewItem from './Review';
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="Parentbox">
      <ProdukFoto/>
      <ProdukInfo isDiscount="Yes" name="Kendaraan Alien" category="Transportasi"/>
      <ReviewItem/>
    </div>
  );
}

function ProdukInfo(props){
  const {category, name, isDiscount} = props;
  const benefit = ["Pesawat Anti Radar", "Senjata Mematikan", "Turbo Jet Daitona"];
  const listBenefit = benefit.map((itemBenefit) =>
    <li key={itemBenefit}>{itemBenefit}</li>
  );
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 50.000.000</p>
        <Discount isDiscount = {isDiscount} discount={50}/>
        <p className="Info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat.
        </p>
          <ul>{listBenefit}</ul>
        <a onClick={(e) => TambahCart(name, e)} href="#">Add to Cart</a>
      </div>
    </div>
  );
}

function TambahCart(e) {
  return console.log(e + " ditambahkan kedalam keranjang");
}

function Discount(props) {
  const { isDiscount, discount } = props;
  if (isDiscount == "Yes") {
    return(
      <p>Dicount {discount}% Off</p>
    );
  } else {
    return(
      <p>Belum ada Discount</p>
    );
  }
}
  
function ProdukFoto() {
  return (
      <div className="Foto">
        <img src="ufooo.png"/>
      </div>
  );
}
Discount.propTypes = {
  discount: PropTypes.number
};

export default App;
