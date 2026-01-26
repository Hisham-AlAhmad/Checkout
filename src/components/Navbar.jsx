function Navbar() {

    return ( 
        <>
        <div className="flex p-4 items-center shadow-md">
            <span className="bg-(--primary) p-2 px-3 text-amber-50 rounded-2xl ">C</span>
            <h1 className="font-bold ml-1">Checkout</h1>
            <p className="ml-auto"><i className="ti ti-shield-lock text-(--primary) "></i> Secure Checkout</p>
        </div>
        </>
     );
}
 
export default Navbar;