"use client";
import { signUp } from "@/lib/auth.client";
import React from "react";

import { Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, Input, InputGroup, Label, TextField } from "@heroui/react";
import { useState } from "react";

const Register = () => {
  const [isVisible, setIsVisible] = useState(false);
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
      {/* Name */}
      <TextField name="name" isRequired className="w-full">
        <Input
          name="name"
          type="text"
          placeholder="Enter your name"
          
          className="w-full border p-3 rounded-md"
        />
      </TextField>

      {/* Email */}
      <TextField name="email" isRequired className="w-full">
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          
          className="w-full border p-3 rounded-md"
        />
      </TextField>

      {/* Password */}
      <TextField name="password" isRequired className="w-full">
        <InputGroup className="w-full">
          <InputGroup.Input
            name="password"
            type={isVisible ? "text" : "password"}
            placeholder="Enter your password"
            
            className="w-full border p-3 rounded-md"
          />

          <InputGroup.Suffix className="pe-0">
            <Button
              type="button"
              isIconOnly
              aria-label={isVisible ? "Hide password" : "Show password"}
              size="sm"
              variant="ghost"
              onPress={() => setIsVisible((prev) => !prev)}
            >
              {isVisible ? (
                <Eye className="size-4" />
              ) : (
                <EyeSlash className="size-4" />
              )}
            </Button>
          </InputGroup.Suffix>
        </InputGroup>
      </TextField>

      {/* Phone */}
      <TextField name="phone" className="w-full">
        <Input
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
          className="w-full border p-3 rounded-md"
        />
      </TextField>

      {/* Photo */}
      <TextField name="photo" className="w-full">
        <Input
          name="photo"
          type="file"
          className="w-full border p-3 rounded-md"
        />
      </TextField>

      {/* Submit */}
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
