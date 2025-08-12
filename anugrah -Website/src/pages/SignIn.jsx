import React ,{useState} from "react";
import { FcGoogle } from "react-icons/fc";
import { registerUser } from "../backend/authService";



const SignUp = () => {
   const [agree, setAgree] = useState(false);
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(name, email, password);
      console.log("User Registered:", data);
      localStorage.setItem("token", data.token); // Save token for auth
      // alert("Registration successful!");
    } catch (err) {
      console.log(err.response?.data?.message || "Error registering user");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div
        className="md:w-1/2 w-full bg-blue-600 text-white flex flex-col justify-center px-8 py-12 relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d')",
        }}
      >
        <div className="bg-blue-700 bg-opacity-70 absolute inset-0"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-4">Looks like you're new here!</h1>
          <p className="text-lg">
            Join our group in few minutes! Sign up with your details to get started
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 w-full flex items-center pt-20 justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center " >Sign Up</h2>
  <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <input
            type="text"
            value={name} onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500"
          />

          {/* Email */}
          <input
            type="email"
            value={email} onChange={(e) => setEmail(e.target.value)} 
            required
            placeholder="Enter Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500"
          />
         

          {/* Password */}
          <input
           
            type="password" value={password} onChange={(e) => setPassword(e.target.value)} 
            required
            placeholder="Enter Password"
            className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:border-blue-500"
          />
           <label className="flex items-center text-gray-600 text-sm mb-6">
            <input
              type="checkbox"
              className="mr-2"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            I agree to the{" "}
            <a href="#" className="text-blue-600 hover:underline mx-1">
              Terms
            </a>
            and
            <a href="#" className="text-blue-600 hover:underline mx-1">
              Privacy Policy
            </a>
          </label>





          {/* Sign Up Button */}
          <button  type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg shadow-md transition">
            Sign Up
          </button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Sign In */}
          <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition">
            <FcGoogle className="text-xl mr-3" />
            Sign up with Google
          </button>

          {/* Already have account */}
          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
