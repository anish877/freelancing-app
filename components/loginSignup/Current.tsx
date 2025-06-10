import React, { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

// Role selector component
const RoleSelector = ({ isClient, setIsClient }) => {
  return (
    <div className="bg-gray-50 w-full max-w-md flex p-1 rounded-full border">
      <button
        className={`${
          isClient 
            ? "bg-black text-white shadow-sm" 
            : "text-gray-600 hover:text-gray-900"
        } flex-1 py-3 px-6 rounded-full cursor-pointer transition-all duration-200 font-medium`}
        onClick={() => setIsClient(true)}
      >
        Client
      </button>
      <button
        className={`${
          !isClient 
            ? "bg-black text-white shadow-sm" 
            : "text-gray-600 hover:text-gray-900"
        } flex-1 py-3 px-6 rounded-full cursor-pointer transition-all duration-200 font-medium`}
        onClick={() => setIsClient(false)}
      >
        Freelancer
      </button>
    </div>
  );
};

export default RoleSelector