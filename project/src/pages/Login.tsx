import React, { useState } from 'react';
import { Code2, Lock, Mail, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login use", {email, password})
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full opacity-20">
        <div className="absolute animate-pulse w-72 h-72 bg-purple-500 rounded-full -top-12 -left-12 blur-3xl"></div>
        <div className="absolute animate-pulse delay-1000 w-72 h-72 bg-blue-500 rounded-full -bottom-12 -right-12 blur-3xl"></div>
      </div>

      <div className="w-full max-w-4xl h-[600px] mx-4 bg-black/30 rounded-2xl overflow-hidden backdrop-blur-xl flex shadow-2xl">
        {/* Left side - Login Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-8">
            {/* <Code2 className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-white">CodeCraft</h1> */}
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back!</h2>
          <p className="text-gray-400 mb-8">Enter your credentials to access your account</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg py-3 px-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg py-3 px-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg py-3 font-semibold hover:opacity-90 transition-opacity"
            >
              Sign In
            </button>
          </form>
          
          <p className="text-gray-400 text-center mt-6">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-500 hover:text-blue-400 transition-colors">
              Register now
            </Link>
          </p>
        </div>

        {/* Right side - Image */}
        <div className="hidden md:block w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
            alt="Coding background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;