"use client";

import LoginModal from "./login.module";

const SignUpModal = () => {
  const openModal = () => {
    const modal = document.getElementById("signupModal");
    modal?.classList.remove("hidden");
  };

  const closeModal = () => {
    const modal = document.getElementById("signupModal");
    modal?.classList.add("hidden");
  };

  return (
    <>
      {/* Button to trigger modal */}
      <button
        onClick={openModal}
      >
        Sign Up
      </button>

      {/* Modal */}
      <div
        id="signupModal"
        className="hidden fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h5 className="text-lg font-bold">Sign Up</h5>
            <button
              className="text-gray-500 hover:text-black"
              onClick={closeModal}
            >
              ×
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6">
            <div className="grid gap-4">
              {/* Name Input */}
              <input
                type="text"
                placeholder="Enter Name"
                className="border rounded-md p-2 w-full"
              />

              {/* Email Input */}
              <input
                type="email"
                placeholder="Enter Email"
                className="border rounded-md p-2 w-full"
              />

              {/* Terms and Conditions */}
              <div className="flex items-center gap-2">
                <input type="checkbox" id="terms" className="form-checkbox" />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the Terms of Service, Privacy Policy, and Content
                  Policies.
                </label>
              </div>

              {/* Create Account Button */}
              <button className="bg-red-500 text-white py-2 px-4 rounded-md w-full">
                Create Account
              </button>

              {/* Divider */}
              <div className="flex items-center justify-center">
                <span className="border-t w-1/3"></span>
                <span className="px-2 text-gray-500">or</span>
                <span className="border-t w-1/3"></span>
              </div>

              {/* Continue with Google */}
              <button className="border rounded-md py-2 px-4 w-full text-gray-700 hover:bg-gray-100 flex items-center justify-center">
                Continue With Google
              </button>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex justify-between p-4 border-t">
            <a href="#login" className="text-blue-500 text-sm">
              Already have an Account? <span className="text-red-500"><LoginModal/></span>
            </a>
            <button
              className="bg-gray-300 px-4 py-2 rounded-md"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpModal;
