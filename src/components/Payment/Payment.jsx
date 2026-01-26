import { useState } from "react";
import CreditCard from "./CreditCard";

const Payment = () => {
    const [cardNumber, setCardNumber] = useState("");
    const [name, setName] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");
    const [error, setError] = useState("");

    return (
        <div className="mx-auto mt-16 max-w-lg rounded-2xl bg-white p-6 shadow-lg">

            {/* Header */}
            <p className="mb-4 flex items-center font-bold">
                <i className="ti ti-credit-card mr-2 rounded-xl bg-green-100 p-2 text-(--primary)" />
                Payment Details
            </p>

            {/* Card Preview */}
            <div className="mb-6 flex justify-center">
                <CreditCard />
            </div>

            {/* Card Number */}
            <div className="mb-4">
                <label className="mb-2 block font-semibold">
                    Card Number <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                    <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={cardNumber}
                        onChange={(e) => {
                            setCardNumber(e.target.value);
                            setError("");
                        }}
                        className={`w-full rounded-lg border p-3 focus:outline-none
              ${error ? "border-red-500" : "border-gray-300 focus:border-(--primary)"}`}
                    />

                    {error && (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                            !
                        </span>
                    )}
                </div>

                {error && (
                    <p className="mt-1 text-sm text-red-500">
                        Card number is required
                    </p>
                )}
            </div>

            {/* Cardholder Name */}
            <div className="mb-4">
                <label className="mb-2 block font-semibold">
                    Cardholder Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    placeholder="JOHN DOE"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 p-3 focus:border-(--primary) focus:outline-none"
                />
            </div>

            {/* Expiry + CVV */}
            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <label className="mb-2 block font-semibold">
                        Expiry Date <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="MM/YY"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 p-3 focus:border-(--primary) focus:outline-none"
                    />
                </div>

                <div>
                    <label className="mb-2 block font-semibold">
                        CVV <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="password"
                        placeholder="123"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 p-3 focus:border-(--primary) focus:outline-none"
                    />
                </div>
            </div>

            {/* Security Note */}
            <p className="mb-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                <i className="ti ti-lock" />
                Your payment information is encrypted and secure
            </p>

            {/* Actions */}
            <div className="flex flex-col gap-4 sm:flex-row">
                <button className="w-full rounded-xl border bg-gray-100 py-3 font-semibold">
                    Back
                </button>

                <button
                    onClick={() => {
                        if (!cardNumber) setError(true);
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-500 py-3 font-semibold text-white hover:bg-teal-600"
                >
                    <i className="ti ti-lock" />
                    Pay $552.95
                </button>
            </div>
        </div>
    );
};

export default Payment;
