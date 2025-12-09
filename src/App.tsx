import "./App.css";
import { HomePage, BookingsPage } from "./pages";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MerchantProfile from "../src/pages/MerchantProfile";

import Layout from "../src/components/Layout/Layout";
import { AuthLayout } from "./pages/authLayout";
import SignInPage from "../src/components/auth/pages/SignInPage";
import { SignUpPage } from "../src/components/auth/pages/SignUpPage";
import OTPPage from "./components/auth/pages/OTPPage";
import ResetPasswordPage from "./components/auth/pages/ResetPasswordPage";
import SingleService from "./components/merchantServices/pages/SingleService";
import MultiService from "./components/merchantServices/pages/MultiService";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          {/* Pages inside layout */}
          <Route path="/" element={<HomePage />} />
        <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/merchantProfile" element={<MerchantProfile />} />
          {/* auth routes */}
          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<Navigate to="/auth/login" replace />} />
            <Route path="login" element={<SignInPage />} />
            <Route path="register" element={<SignUpPage />} />
            <Route path="otp" element={<OTPPage />} />
            <Route path="reset-password" element={<ResetPasswordPage />} />
          </Route>
          <Route path="merchant-services" element={<SingleService />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
