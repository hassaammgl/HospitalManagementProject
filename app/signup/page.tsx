"use client";

import React from "react";

export default function SignUp() {
  const [isAdmin, setIsAdmin] = React.useState(false);

  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input type="password" id="password" name="password" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
      </div>
      <div>
        <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
        <input type="date" id="dob" name="dob" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
      </div>
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
        <input type="text" id="username" name="username" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
      </div>
      <div>
        <label htmlFor="admin" className="inline-flex items-center">
          <input type="checkbox" id="admin" name="admin" onChange={(e) => setIsAdmin(e.target.checked)} className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          <span className="ml-2">Admin Account</span>
        </label>
      </div>
      {isAdmin && (
        <>
          <div>
            <label htmlFor="adminUsername" className="block text-sm font-medium text-gray-700">Admin Username</label>
            <input type="text" id="adminUsername" name="adminUsername" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <input type="text" id="address" name="address" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
          </div>
        </>
      )}
      <button type="submit" className="mt-4 w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Sign Up</button>
    </form>
  );
}

