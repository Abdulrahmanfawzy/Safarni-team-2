import axios from "axios";

const API_URL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Call API Endpoints
export const apiLogin = {
  login: (data: any) => api.post("/api/v1/auth/login", data),
  register: (data: any) => api.post("/api/v1/auth/register", data),
  userProfile: () => api.get("/api/v1/users/me"),
  updateProfile: (data: any) => api.put("/api/v1/users/me", data),
  forgotPassword: (data: any) => api.post("/api/v1/auth/forgot-password", data),
  resetPassword: (data: any) => api.post("/api/v1/auth/reset-password", data),
  verifyOtp: (data: any) => api.post("/api/v1/auth/verify-otp", data),
  resentOtp: (data: any) => api.post("/api/v1/auth/resend-otp", data),
  logout: () => api.post("/auth/logout"),
  deleteAccount: () => api.delete("/auth/delete-account"),
};
