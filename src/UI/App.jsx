import  { useEffect, useState } from 'react';
import Header from './Header';
import { Outlet } from "react-router-dom";
import { CartContext } from "./CartContext";
import Footer from './Footer';

const App = () => {

  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [priceRange, setPriceRange] = useState("all");
     
const addToCart = (product) => {
  setCart(prevCart => {
    const existingItem = prevCart.find(item => item.id === product.id);

    if (existingItem) {
      
      return prevCart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      
      return [...prevCart, { ...product, quantity: 1 }];
    }
  });
};


const increaseQty = (id) => {
  setCart(prevCart =>
    prevCart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};


const decreaseQty = (id) => {
  setCart(prevCart =>
    prevCart
      .map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
  );
};



const removeFromCart = (id) => {
  setCart(prevCart =>
    prevCart.filter(item => item.id !== id)
  );
};

const clearCart = () => {
  setCart([]);
};


const mens = () => {
  setCategory("men's clothing");
};

const womens = () => {
  setCategory("women's clothing");
};

const jewelery = () => {
  setCategory("jewelery");
};

const electronics = () => {
  setCategory("electronics");
};





console.log(cart);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const responce = await fetch('https://fakestoreapi.com/products');
    const jsonData = await responce.json();
    setDatas(jsonData);
    
  };




  const filteredData = datas.filter((item) => {
  const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());

  const matchCategory =
    category === "all" || item.category === category;

  return matchSearch && matchCategory;
});


const priceFilteredData = filteredData.filter(item => {

  if (priceRange === "below1000") return item.price < 1000;
  if (priceRange === "below100") return item.price < 100;
  if (priceRange === "100to500") return item.price >= 100 && item.price <= 500;
  if (priceRange === "500to800") return item.price >= 500 && item.price <= 800;
  if (priceRange === "800to1000") return item.price > 800 && item.price <= 1000;

  return true;

});






  return (
      
    <>


     <div className='container'>
      <CartContext.Provider value={{ filteredData, addToCart, removeFromCart, increaseQty, decreaseQty ,clearCart , cart, priceFilteredData, setPriceRange ,priceRange   }}>
      <Header search={search} setSearch={setSearch}  mens={mens} setCategory={setCategory} womens={womens} jewelery={jewelery} electronics={electronics}/>
      <Outlet />
      <Footer/>

      </CartContext.Provider>

     </div>

      
    </>
    
  );
};

export default App;