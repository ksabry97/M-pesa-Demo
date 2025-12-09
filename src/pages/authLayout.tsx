import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      {/* Centered Auth Content */}
      <div className="w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
}
