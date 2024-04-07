"use client";
import { useState } from "react";

function Disponible({ disponible }) {
  const [quantity, setQuantity] = useState(1);
  const [updateDisponible,setUpdateDisponible]= useState(disponible-1);

  function rest(){
    if(quantity>1){
        setQuantity(quantity-1)
        setUpdateDisponible(updateDisponible+1)

    }
  }
  function add(){
    if(updateDisponible>=1){
        setQuantity(quantity+1)
        setUpdateDisponible(updateDisponible-1)
    }
  }
  return (
    <div className="flex my-8 justify-evenly items-center gap-4">
      <button onClick={rest} className="bg-zinc-700 rounded-full  font-bold size-8">-</button>
      <span className="bg-red-600 rounded-md text-center text-xl font-bold size-8">{quantity}</span>
      <button onClick={add} className="bg-zinc-700 rounded-full  font-bold size-8">+</button>
      <span>{updateDisponible} disponible</span>
    </div>
  );
}

export default Disponible;
