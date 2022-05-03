//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 class="heading" contentEditable="true">
      SUMON MONDAL
    </h1>

    <img
      className="food-img"
      alt="pp"
      src="https://avatars.githubusercontent.com/u/91090836?v=4"
    />
    <img
      className="food-img"
      alt="dp"
      src="https://media-exp1.licdn.com/dms/image/D5635AQGx2wzZnSBATg/profile-framedphoto-shrink_400_400/0/1648276407206?e=2147483647&v=beta&t=B5JGRsQpc1CAUmlvr7uo4-7-C1l6RAX0JGgiC1P8L0U"
    />
    <img
      className="food-img"
      alt="lp"
      src="https://scontent.fdac27-2.fna.fbcdn.net/v/t1.6435-9/203063485_4291460670975259_3437589686155528248_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHSoXAqAVimwgKoqfNuOrzg7TYq2SwaqG7tNirZLBqobqb1npInpeHyA00MQ1L70Xde1usNBpXVfo5_VnGexM2G&_nc_ohc=TQCAU5qHv7QAX8_MlZv&_nc_ht=scontent.fdac27-2.fna&oh=00_AT8iEWhjSfZWKgvgrhZPa_ryTBdCYl9WJuiSgCvwm4mKhA&oe=629722F8"
    />
    <img alt="pp" src={img + "?grayscale"} />

    <p>I am from khulna</p>
    <ul>
      <li>American International University Bangladesh</li>
      <li>Khulna Public college</li>
      <li>Khulna Public College</li>
      <li>Panchu GOVT. Primary School</li>
      <li>Age :{Math.floor(Math.random() * 10)}</li>
    </ul>
  </div>,
  document.getElementById("root")
);

//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
