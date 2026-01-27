import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
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
      navigate("/address");
    }
  };

  return (
    <div className="max-w-lg rounded-2xl bg-white p-6 shadow-lg mx-auto mt-10">
      <div className="flex">
        <i className="ti ti-user text-[#14b8a5] rounded-full w-10 h-10 text-3xl p-1 bg-[#14b8a51a] mr-2 mt-2"></i>
        <h1 className="font-bold mt-2.5">
          Contact Information
          <br />
          <span className="font-normal text-sm text-[grey]">How can we reach you?</span>
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block font-semibold mb-2">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              className={`rounded-xl p-2 border-2 w-full ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:border-[#14b8a5] focus:outline-none`}
              placeholder="John"
              type="text"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              className={`rounded-xl p-2 border-2 w-full ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:border-[#14b8a5] focus:outline-none`}
              placeholder="Doe"
              type="text"
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
          </div>
        </div>

        <div className="mt-4">
          <label className="block font-semibold mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            className={`rounded-xl p-2 border-2 w-full ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-[#14b8a5] focus:outline-none`}
            placeholder="john.doe@gmail.com"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mt-4">
          <label className="block font-semibold mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            className={`rounded-xl p-2 border-2 w-full ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:border-[#14b8a5] focus:outline-none`}
            placeholder="+1 (555) 123-4567"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          <p className="text-gray-500 text-sm mt-1">For delivery updates</p>
        </div>

        <div className="flex gap-2 mt-6">
          <Link
            to="/"
            className="bg-[#f6f7f9] text-black font-bold rounded-xl p-3 w-full hover:bg-gray-200 text-center"
          >
            Back
          </Link>
          <button
            type="submit"
            className="bg-[#14b8a5] text-white font-bold rounded-xl p-3 w-full hover:bg-[#12a594]"
          >
            Continue to address
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;