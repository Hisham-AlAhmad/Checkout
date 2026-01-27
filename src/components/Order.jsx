import { useState } from "react";

function Order() {
  const [items, setItems] = useState([{id: 1,name: "Premium Wireless Headphones",desc: "Noise-canceling,30hr battery",price: 299.99,},
    {id: 2,name: "Leather Laptop Sleeve",desc: 'Fits up to 15" laptops',price: 179.99,},
    {id: 3,name: "USB-C Hub Pro",desc: "7-in-1 connectivity",price: 59.99,},]);
  const shipping = 12.99;
  const tax = 40;

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  const total = subtotal + shipping + tax;
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  return (
    <div className="max-w-lg rounded-2xl bg-white p-6 shadow-lg mx-auto mt-10">
      <div className="flex">
        <i className="ti ti-shopping-bag mt-2 text-(--primary) text-2xl bg-[#14b8a51a] rounded-full w-10 h-10 flex items-center justify-center"></i>
        <div className="pl-2">
          <h1 className="font-bold text-xl">Your Order</h1>
          <p>Review your items before checkout</p>
        </div>
      </div>

      {items.map((item) => (
        <div key={item.id} className="bg-gray-100 flex rounded-2xl mt-4">
          <div className="bg-white w-13 h-13 rounded-2xl flex items-center justify-center m-3 text-2xl">
            <i className="ti ti-shopping-bag"></i>
          </div>

          <div className="ml-1 p-2 flex-1">
            <p className="font-semibold">{item.name}</p>
            <p className="text-gray-500">{item.desc}</p>
            
          </div>

          <div className="flex flex-col justify-center items-center mr-4">
            <p>${(item.price * item.qty).toFixed(2)}</p>
            <button
              onClick={() => deleteItem(item.id)}
              className="text-red-500 text-sm mt-2"
            >
              ✕
            </button>
          </div>
        </div>
      ))}

      <div className="p-3 mt-4 bg-gray-100 rounded-2xl">
        <div className="flex justify-between">
          <p className="text-gray-500">Subtotal</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500">Shipping</p>
          <p>${shipping.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500">Tax</p>
          <p>${tax.toFixed(2)}</p>
        </div>
        <hr className="text-gray-500 my-4" />
        <div className="flex justify-between">
          <p className="font-semibold">Total</p>
          <p className="text-(--primary)">${total.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex items-center">
        <button className="bg-[#14b8a5] text-white font-bold rounded-xl p-3 mt-6 w-full hover:bg-[#14b8a5]">
          Proceed to Checkout <i className="ti ti-arrow-narrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Order;
