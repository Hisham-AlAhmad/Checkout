import { useState } from "react";
import { Link } from "react-router-dom";

const Payment = () => {
    const [streetAddress, setStreetAddress] = useState("");
    const [apartment, setApartment] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [country, setCountry] = useState("");

    return (
        <div className="mx-auto mt-10 max-w-lg rounded-2xl bg-white p-6 shadow-lg">

            {/* Header */}
            <div className="flex">
                <i className="ti ti-user text-(--primary) rounded-full w-10 h-10 text-3xl p-1 bg-[#14b8a51a] mr-2 mt-2  "></i>
                <h1 className="font-bold mt-2.5">
                    Shipping Address
                    <br />
                    <span className="font-normal text-sm text-[grey] ">Where should we send your order?</span>
                </h1></div>

            {/* Street Address */}
            <div className="mb-4">
                <label className="mb-2 block font-semibold">
                    Street Address <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                    <input
                        type="text"
                        placeholder="123 Main St"
                        value={streetAddress}
                        onChange={(e) => setStreetAddress(e.target.value)}
                        className={`w-full rounded-lg border p-3 focus:outline-none`}
                    />
                </div>
            </div>

            {/* Apartment */}
            <div className="mb-4">
                <label className="mb-2 block font-semibold">
                    Appartment <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    placeholder="221B Baker Street"
                    value={apartment}
                    onChange={(e) => setApartment(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 p-3 focus:border-(--primary) focus:outline-none"
                />
            </div>

            {/* City / State */}
            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <label className="mb-2 block font-semibold">
                        City <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Japan"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 p-3 focus:border-(--primary) focus:outline-none"
                    />
                </div>

                <div>
                    <label className="mb-2 block font-semibold">
                        State <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="NY"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 p-3 focus:border-(--primary) focus:outline-none"
                    />
                </div>
                
            </div>

            {/* Zip / Country */}
            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <label className="mb-2 block font-semibold">
                        Zip Code <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="1001"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 p-3 focus:border-(--primary) focus:outline-none"
                    />
                </div>

                <div>
                    <label className="mb-2 block font-semibold">
                        Country <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="NY"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 p-3 focus:border-(--primary) focus:outline-none"
                    />
                </div>

                
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4 sm:flex-row">
                <button className="w-full rounded-xl border bg-gray-100 py-3 font-semibold">
                    Back
                </button>

                <Link to="/payment"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-500 py-3 font-semibold text-white hover:bg-teal-600"
                >
                    Continue to payment
                </Link>
            </div>
        </div>
    );
};

export default Payment;
