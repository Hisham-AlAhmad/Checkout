import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Address = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        streetAddress: "",
        apartment: "",
        city: "",
        state: "",
        zipCode: "",
        country: ""
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!formData.streetAddress.trim()) {
            newErrors.streetAddress = "Street address is required";
        }

        if (!formData.apartment.trim()) {
            newErrors.apartment = "Apartment/Suite is required";
        }

        if (!formData.city.trim()) {
            newErrors.city = "City is required";
        }

        if (!formData.state.trim()) {
            newErrors.state = "State is required";
        }

        if (!formData.zipCode.trim()) {
            newErrors.zipCode = "Zip code is required";
        } else if (!/^\d{4,6}$/.test(formData.zipCode)) {
            newErrors.zipCode = "Invalid zip code";
        }

        if (!formData.country.trim()) {
            newErrors.country = "Country is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error for this field when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: "" }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            navigate("/payment");
        }
    };

    return (
        <div className="mx-auto mt-10 max-w-lg rounded-2xl bg-white p-6 shadow-lg">
            {/* Header */}
            <div className="flex">
                <i className="ti ti-map-pin text-[#14b8a5] rounded-full w-10 h-10 text-3xl p-1 bg-[#14b8a51a] mr-2 mt-2"></i>
                <h1 className="font-bold mt-2.5">
                    Shipping Address
                    <br />
                    <span className="font-normal text-sm text-[grey]">Where should we send your order?</span>
                </h1>
            </div>

            <form onSubmit={handleSubmit}>
                {/* Street Address */}
                <div className="mb-4 mt-4">
                    <label className="mb-2 block font-semibold">
                        Street Address <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="123 Main St"
                        value={formData.streetAddress}
                        onChange={(e) => handleChange('streetAddress', e.target.value)}
                        className={`w-full rounded-lg border-2 p-3 focus:outline-none ${errors.streetAddress ? 'border-red-500' : 'border-gray-300 focus:border-[#14b8a5]'}`}
                    />
                    {errors.streetAddress && <p className="text-red-500 text-sm mt-1">{errors.streetAddress}</p>}
                </div>

                {/* Apartment */}
                <div className="mb-4">
                    <label className="mb-2 block font-semibold">
                        Apartment/Suite <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Apt 221B"
                        value={formData.apartment}
                        onChange={(e) => handleChange('apartment', e.target.value)}
                        className={`w-full rounded-lg border-2 p-3 focus:outline-none ${errors.apartment ? 'border-red-500' : 'border-gray-300 focus:border-[#14b8a5]'}`}
                    />
                    {errors.apartment && <p className="text-red-500 text-sm mt-1">{errors.apartment}</p>}
                </div>

                {/* City / State */}
                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label className="mb-2 block font-semibold">
                            City <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="New York"
                            value={formData.city}
                            onChange={(e) => handleChange('city', e.target.value)}
                            className={`w-full rounded-lg border-2 p-3 focus:outline-none ${errors.city ? 'border-red-500' : 'border-gray-300 focus:border-[#14b8a5]'}`}
                        />
                        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                    </div>

                    <div>
                        <label className="mb-2 block font-semibold">
                            State <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="NY"
                            value={formData.state}
                            onChange={(e) => handleChange('state', e.target.value)}
                            className={`w-full rounded-lg border-2 p-3 focus:outline-none ${errors.state ? 'border-red-500' : 'border-gray-300 focus:border-[#14b8a5]'}`}
                        />
                        {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
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
                            placeholder="10001"
                            value={formData.zipCode}
                            onChange={(e) => handleChange('zipCode', e.target.value)}
                            className={`w-full rounded-lg border-2 p-3 focus:outline-none ${errors.zipCode ? 'border-red-500' : 'border-gray-300 focus:border-[#14b8a5]'}`}
                        />
                        {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
                    </div>

                    <div>
                        <label className="mb-2 block font-semibold">
                            Country <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="United States"
                            value={formData.country}
                            onChange={(e) => handleChange('country', e.target.value)}
                            className={`w-full rounded-lg border-2 p-3 focus:outline-none ${errors.country ? 'border-red-500' : 'border-gray-300 focus:border-[#14b8a5]'}`}
                        />
                        {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-4 sm:flex-row">
                    <Link
                        to="/contact"
                        className="w-full rounded-xl border bg-gray-100 py-3 font-semibold text-center hover:bg-gray-200"
                    >
                        Back
                    </Link>

                    <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-500 py-3 font-semibold text-white hover:bg-teal-600"
                    >
                        Continue to payment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Address;