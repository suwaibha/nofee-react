const Login= () => {
  return(
    <div className="min-h-screen flex items-center justify-center bg-white">
     <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-90  border-1"> 
      <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" //rounded-xl can be changed to rounded-blg
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-900 transition duration-200"
        >
          Login
        </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don't have an account? {" "}
          <a href="/register" className="text-blue-900 hover:underline">
            Register
          </a>
        </p>
        <p className="=text-sm text-center mt-1">
          Forgot password?{" "}
          <a href="/forgot-password" className="text-blue-900 hover:underline">
            Reset
          </a>
        </p>
        <p className="text-sm text-center mt-1">
          Login with your organization{" "}
          <a href="/Lohin" className="text-blue-900 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};
export default Login;