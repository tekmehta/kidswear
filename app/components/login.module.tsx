"use client";

const LoginModal = () => {
  const openModal = () => {
    const modal = document.getElementById("loginModal");
    modal?.classList.remove("hidden");
  };

  const closeModal = () => {
    const modal = document.getElementById("loginModal");
    modal?.classList.add("hidden");
  };

  return (
    <>
      {/* Button to trigger modal */}
      <button
        onClick={openModal}
      >
        Log In
      </button>

      {/* Modal */}
      <div
        id="loginModal"
        className="hidden fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h5 className="text-lg font-bold">Log In</h5>
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
              {/* Country Code and Phone Number */}
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Phone number"
                  className="border flex-grow rounded-md p-2"
                />
              </div>
              <div className="flex gap-2">
              <input
                  type="password"
                  placeholder="Password"
                  className="border flex-grow rounded-md p-2"
                />
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center">
                <span className="border-t w-1/3"></span>
                <span className="px-2 text-gray-500">or</span>
                <span className="border-t w-1/3"></span>
              </div>

              {/* Continue with Email */}
              <button className="border rounded-md py-2 px-4 w-full text-gray-700 hover:bg-gray-100 flex items-center justify-center">
                Continue With Email
              </button>

              {/* Continue with Google */}
              <button className="border rounded-md py-2 px-4 w-full text-gray-700 hover:bg-gray-100 flex items-center justify-center">
                Continue With Google
              </button>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex justify-end p-4 border-t">
            <button
              className="bg-gray-300 px-4 py-2 rounded-md mr-2"
              onClick={closeModal}
            >
              Close
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Log In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
