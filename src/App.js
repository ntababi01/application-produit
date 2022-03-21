import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./component/Navigation";
import ProductList from "./component/ProductList";
import "./App.css";
export default function App(props) {
  const Produits = [
    {
      nomproduit: "p1",
      prix: 212,
      photo:"https://apibackend.mega-pc.net//uploads/gallerie/1624363055729.webp"
      ,
    },
    {
      nomproduit: "p2",
      prix: 215,
      photo:
      "https://apibackend.mega-pc.net//uploads/gallerie/1624363055729.webp"
      ,
    }
  ];

  return (
    <div>
      <Navigation />
      <ProductList produits={
        Produits
      } 
      />
    </div>
  );
}
