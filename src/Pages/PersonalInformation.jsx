import { useState } from "react";
import Footer from "../components/Footer";
import Title from "../components/Title";

export default function PersonalInformation({ setActiveTab, values, setValues, setSelectionPlanLock }) {
  const [errors, setErrors] = useState({});

  function submitHandler(e) {
    e.preventDefault();
    const error = {};

    if (!values.firstName.trim()) error.firstName = "This field is required";

    if (!values.email.trim()) error.email = "This field is required";
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(values.email)) error.email = "Invalid email address";
    }

    if (!values.phoneNumber.trim()) error.phoneNumber = "This field is required";
    else {
      const afghanPhoneRegex = /^07\d{8}$/;
      if (!afghanPhoneRegex.test(values.phoneNumber))
        error.phoneNumber = "Invalid Afghan phone number (e.g. 0789976745)";
    }

    if (Object.keys(error).length) {
      setErrors(error);
    } else {
      setErrors({});
      setSelectionPlanLock(false);
      setActiveTab("selectionPlan");
    }
  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col gap-y-4 relative pb-24 max-md:min-h-[70vh] h-full bg-white w-full rounded-xl shadow-sm"
    >
      <div>
        <Title>Personal Information</Title>
        <p className="text-gray-600 mb-6">
          Please provide your name, email, and phone number.
        </p>
      </div>

      <div>
        <div className="flex justify-between">
          <label className="font-medium text-gray-700">Name</label>
          <span className="text-red-500 text-sm">{errors.firstName}</span>
        </div>
        <input
          className="border p-3 mt-1.5 rounded-md w-full focus:outline-none focus:border-blue-500"
          type="text"
          name="firstName"
          placeholder="e.g. Stephen King"
          value={values.firstName}
          onChange={(e) => setValues({ ...values, firstName: e.target.value })}
        />
      </div>

      <div>
        <div className="flex justify-between">
          <label className="font-medium text-gray-700">Email</label>
          <span className="text-red-500 text-sm">{errors.email}</span>
        </div>
        <input
          className="border p-3 mt-1.5 rounded-md w-full focus:outline-none focus:border-blue-500"
          type="email"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
      </div>

      <div>
        <div className="flex justify-between">
          <label className="font-medium text-gray-700">Phone Number</label>
          <span className="text-red-500 text-sm">{errors.phoneNumber}</span>
        </div>
        <input
          className="border p-3 mt-1.5 rounded-md w-full focus:outline-none focus:border-blue-500"
          type="tel"
          name="phoneNumber"
          placeholder="e.g. 0791234567"
          value={values.phoneNumber}
          onChange={(e) => setValues({ ...values, phoneNumber: e.target.value })}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <Footer nextLabel="Next Step" onNext={submitHandler} />
      </div>
    </form>
  );
}
