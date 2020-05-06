import React from 'react';
import './App.css';

function ReviewItem(){
    //mempersiapkan data dummy JSON
    const user = [
      {
        "id": 1,
        "name": "Manuel Ismail",
        "review": "Kendaraan Stabil saat dikejar US ARMY, Senjatanya berhasil melumpuhkan 15 kendaraan lapis baja, 20 jet F-16 dengan AIM yang terkontrol. What a Gun!!!",
        "img": "https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg?cs=srgb&dl=man-sitting-near-purple-wall-2232981.jpg&fm=jpg"
      },
      {
        "id": 2,
        "name": "Frishien Boba",
        "review": "Lapis Baja yang sangat baik. Tidak tertembus RPG!!!",
        "img": "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?cs=srgb&dl=man-leaning-on-wall-2128807.jpg&fm=jpg"
      },
      {
        "id": 3,
        "name": "Ayutria Valkr",
        "review": "Dengan Lapis baja, AIM terkontrol dan Laser super, aku berhasil merampok sebesar IDR 100.000 menggunakan Kartu ATM milikku di bank BRI",
        "img": "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg?cs=srgb&dl=woman-in-black-tank-top-wearing-eyeglasses-2100063.jpg&fm=jpg"
      }
    ];
    
    const listReview = user.map((itemReview) =>
    <div key={itemReview.id} className="Item">
      <img src= {itemReview.img}/>
      <div  className="User">
        <h3>{itemReview.name}</h3>
        <p>{itemReview.review}</p>
      </div>
    </div>
    );
    return(
      <div className="Review-box">
        <h2>Review</h2>
        {listReview}     
      </div>
    );
  }

  export default ReviewItem;  