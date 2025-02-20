import "./index.css";
import pizzaData from "./data.js";

function App() {

  return (
      <div className="container">
          <Header/>
          <Menu/>
          <Footer/>
      </div>

  )
}

const Menu = () =>{

    const pizzas = pizzaData.map((pizza)=>(
        <Pizza key = {pizza.name} pizzObj={pizza} />
        ));

    return (

        <main className="menu">
            <h2>Our Menu</h2>
            <p> authentic pizza</p>
            <ul className="pizzas">
                {pizzas}
            </ul>
        </main>
    )

}

function Pizza({ pizzObj }) {
    const { name, ingredients, price, photoName, soldOut } = pizzObj;

    return (
        <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
            <img src={photoName} alt={name} />
            <div>
                <h3>{name}</h3>
                <p>{ingredients}</p>
                <span>{soldOut ? "SOLD OUT" : `$${price}`}</span>
            </div>
        </li>
    );
}


const Header = ()=>{
    return (
        <header className="header">
            <h1>fast React Pizza Co.</h1>
        </header>
    )
}


const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour} />
                ) : (
                <p>Sorry, we are closed. See you tomorrow! Our hours are {openHour} to {closeHour}.</p>
    )}
</footer>
);
};

const Order = ({ closeHour }) => {
    return (
        <div className="order">
            <p>We are open until {closeHour}! <br/><br/>Come visit or order online.</p>
            <button className="btn">Order Now</button>
        </div>
    );
};


export default App

