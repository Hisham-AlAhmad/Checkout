import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Payment = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        cardNumber: "",
        name: "",
        expiry: "",
        cvv: ""
    });
    const [errors, setErrors] = useState({});

    const formatCardNumber = (value) => {
        const cleaned = value.replace(/\s/g, '');
        const chunks = cleaned.match(/.{1,4}/g);
        return chunks ? chunks.join(' ') : cleaned;
    };

    const formatExpiry = (value) => {
        const cleaned = value.replace(/\D/g, '');
        if (cleaned.length >= 2) {
            return cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
        }
        return cleaned;
    };

    const validateForm = () => {
        const newErrors = {};

        // Card number validation (remove spaces)
        const cleanCardNumber = formData.cardNumber.replace(/\s/g, '');
        if (!cleanCardNumber) {
            newErrors.cardNumber = "Card number is required";
        } else if (!/^\d{16}$/.test(cleanCardNumber)) {
            newErrors.cardNumber = "Card number must be 16 digits";
        }

        // Cardholder name validation
        if (!formData.name.trim()) {
            newErrors.name = "Cardholder name is required";
        }

        // Expiry validation
        if (!formData.expiry) {
            newErrors.expiry = "Expiry date is required";
        } else {
            const [month, year] = formData.expiry.split('/');
            if (!month || !year || month < 1 || month > 12) {
                newErrors.expiry = "Invalid expiry date";
            }
        }

        // CVV validation
        if (!formData.cvv) {
            newErrors.cvv = "CVV is required";
        } else if (!/^\d{3,4}$/.test(formData.cvv)) {
            newErrors.cvv = "CVV must be 3 or 4 digits";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (field, value) => {
        let formattedValue = value;

        if (field === 'cardNumber') {
            formattedValue = formatCardNumber(value.replace(/\D/g, '').slice(0, 16));
        } else if (field === 'expiry') {
            formattedValue = formatExpiry(value.slice(0, 5));
        } else if (field === 'cvv') {
            formattedValue = value.replace(/\D/g, '').slice(0, 4);
        }

        setFormData(prev => ({ ...prev, [field]: formattedValue }));
        
        // Clear error for this field when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: "" }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Process payment here
            alert("Payment successful! Order confirmed.");
            navigate("/");
        }
    };

    return (
        <div className="mx-auto mt-10 max-w-lg rounded-2xl bg-white p-6 shadow-lg">
            {/* Header */}
            <div className="flex items-center mb-4">
                <i className="ti ti-credit-card mr-2 rounded-xl bg-green-100 p-2 text-[#14b8a5] text-2xl" />
                <div>
                    <h1 className="font-bold text-xl">Payment Details</h1>
                    <p className="text-sm text-gray-500">Enter your payment information</p>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                {/* Card Number */}
                <div className="mb-4">
                    <label className="mb-2 block font-semibold">
                        Card Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            value={formData.cardNumber}
                            onChange={(e) => handleChange('cardNumber', e.target.value)}
                            className={`w-full rounded-lg border-2 p-3 focus:outline-none ${
                                errors.cardNumber ? 'border-red-500' : 'border-gray-300 focus:border-[#14b8a5]'
                            }`}
                        />
                        {errors.cardNumber && (
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                                ⚠
                            </span>
                        )}
                    </div>
                    {errors.cardNumber && (
                        <p className="mt-1 text-sm text-red-500">{errors.cardNumber}</p>
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
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value.toUpperCase())}
                        className={`w-full rounded-lg border-2 p-3 focus:outline-none ${
                            errors.name ? 'border-red-500' : 'border-gray-300 focus:border-[#14b8a5]'
                        }`}
                    />
                    {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
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
                            value={formData.expiry}
                            onChange={(e) => handleChange('expiry', e.target.value)}
                            className={`w-full rounded-lg border-2 p-3 focus:outline-none ${
                                errors.expiry ? 'border-red-500' : 'border-gray-300 focus:border-[#14b8a5]'
                            }`}
                        />
                        {errors.expiry && (
                            <p className="mt-1 text-sm text-red-500">{errors.expiry}</p>
                        )}
                    </div>

                    <div>
                        <label className="mb-2 block font-semibold">
                            CVV <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            placeholder="123"
                            value={formData.cvv}
                            onChange={(e) => handleChange('cvv', e.target.value)}
                            className={`w-full rounded-lg border-2 p-3 focus:outline-none ${
                                errors.cvv ? 'border-red-500' : 'border-gray-300 focus:border-[#14b8a5]'
                            }`}
                        />
                        {errors.cvv && (
                            <p className="mt-1 text-sm text-red-500">{errors.cvv}</p>
                        )}
                    </div>
                </div>

                {/* Security Note */}
                <p className="mb-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                    <i className="ti ti-lock" />
                    Your payment information is encrypted and secure
                </p>

                {/* Actions */}
                <div className="flex flex-col gap-4 sm:flex-row">
                    <Link
                        to="/address"
                        className="w-full rounded-xl border bg-gray-100 py-3 font-semibold text-center hover:bg-gray-200"
                    >
                        Back
                    </Link>

                    <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-500 py-3 font-semibold text-white hover:bg-teal-600"
                    >
                        <i className="ti ti-lock" />
                        Pay $652.95
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Payment;