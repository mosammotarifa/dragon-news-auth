"use client"
import { signUp } from "@/lib/auth.client";
import React from "react";

const Register = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);
    const { data, error } = await signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      callbackURL: "/",
    });
    console.log("the users data of register", data, error);
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">REGISTER</h2>

      <form onSubmit={onSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          required
          placeholder="Enter your name"
          className="w-full border p-3 rounded-md"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="w-full border p-3 rounded-md"
        />

        <input
          required
          type="password"
          name="password"
          placeholder="Enter your password"
          className="w-full border p-3 rounded-md"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          className="w-full border p-3 rounded-md"
        />

        <input
          type="file"
          name="photo"
          placeholder="Enter your photo URL"
          className="w-full border p-3 rounded-md"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
