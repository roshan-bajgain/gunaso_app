"use client";

import Link from "next/link";
// import { Home, FileText, PlusCircle, Bell } from "lucide-react";
import {Home, FileText, PlusCircle, Bell} from 'lucide-react';

export default function Bottom() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-100 border-t shadow-md">
      <div className="grid grid-cols-4 text-center">
        <Link
          href="/"
          className="p-3 flex flex-col items-center text-gray-600 hover:text-blue-600"
        >
          <Home size={20} />
          <span className="text-xs">Home</span>
        </Link>
        <Link
          href="/my-grievances"
          className="p-3 flex flex-col items-center text-gray-600 hover:text-blue-600"
        >
          <FileText size={20} />
          <span className="text-xs">My Grievances</span>
        </Link>
        <Link
          href="/submit-grievance"
          className="p-3 flex flex-col items-center text-gray-600 hover:text-blue-600"
        >
          <PlusCircle size={20} />
          <span className="text-xs">Submit</span>
        </Link>
        <Link
          href="/notifications"
          className="p-3 flex flex-col items-center text-gray-600 hover:text-blue-600"
        >
          <Bell size={20} />
          <span className="text-xs">Notifications</span>
        </Link>
      </div>
    </nav>
  );
}
