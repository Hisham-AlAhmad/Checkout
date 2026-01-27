function Order() {
    return (
        <div className="max-w-lg rounded-2xl bg-white p-6 shadow-lg mx-auto mt-10">
            <div className="flex">
                <i className="ti ti-shopping-bag mt-2 text-(--primary) text-2xl bg-[#14b8a51a] rounded-full w-10 h-10 flex items-center justify-center  "></i>
                <div className="pl-2"><h1 className="font-bold text-xl">Your Order</h1>
                    <p>Review your items before checkout</p></div>
            </div>
            <div className="bg-gray-100 flex rounded-2xl mt-4  ">
                <div className="bg-white w-13 h-13 rounded-2xl flex items-center justify-center m-3 text-2xl"><i className="ti ti-shopping-bag "></i></div>
                <div className="ml-1 p-2"><p>Premium Wireless Headphones</p>
                    <p>Noise-canceling,30hr battery
                    </p>
                    <p>Qty:1
                    </p>
                </div>
                <div className="m-auto">$299.99</div>
            </div>
            <div className="bg-gray-100 flex rounded-2xl mt-4  ">
                <div className="bg-white w-13 h-13 rounded-2xl flex items-center justify-center m-3 text-2xl"><i className="ti ti-shopping-bag "></i></div>
                <div className="ml-1 p-2 mr-15 "><p>Leather Laptop Sleeve</p>
                    <p>Fits up to 15" laptops
                    </p>
                    <p>Qty:1
                    </p>
                </div>
                <div className="m-auto ">$79.99</div>
            </div>
            <div className="bg-gray-100 flex rounded-2xl mt-4  ">
                <div className="bg-white w-13 h-13 rounded-2xl flex items-center justify-center m-3 text-2xl"><i className="ti ti-shopping-bag "></i></div>
                <div className="ml-1 p-2 mr-20"><p>USB-C Hub Pro</p>
                    <p>7-in-1 connectivity
                    </p>
                    <p>Qty:2
                    </p>
                </div>
                <div className="m-auto">$119.98</div>
            </div>
            <div className="p-3 mt-4 bg-gray-100 rounded-2xl">
                <div className="flex justify-between"><p className="text-gray-500">Subtotal</p>
                    <p>$499.96</p></div>
                    <div className="flex justify-between">
                        <p>Shipping</p>
                        <p>$12.99</p></div>
                        <div className="flex justify-between "><p>Tax</p>
                            <p>$40.00</p></div>
                            <hr className=" text-(--primary) my-4"/>
                <div className="flex justify-between"><p className="font-semibold">Total</p>
                <p className="text-(--primary)">$552.95</p></div>
            </div>
        </div>
    );
}

export default Order;