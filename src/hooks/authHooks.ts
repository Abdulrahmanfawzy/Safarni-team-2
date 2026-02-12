import { useMutation } from "@tanstack/react-query";
import { apiLogin } from "../lib/api/axios";

// register hook
export const useRegister = () => {
  return useMutation({
    mutationFn: (data: any) => {
      return apiLogin.register(data);
    },
    onSuccess: (data: any) => {
      console.log("success");
      console.log(data);
    },
    onError: (error: any) => {
      console.log(error.response.data);
    },
  });
};

// login hook
export const useLogin = () => {
  return useMutation({
    mutationFn: (data: any) => {
      return apiLogin.login(data);
    },
    onSuccess: (data: any) => {
      console.log("success");
      console.log(data);
    },
    onError: (error: any) => {
      console.log(error.response.data);
    },
  });
};

// user profile hook
export const useUserProfile = () => {
  return useMutation({
    mutationFn: () => {
      return apiLogin.userProfile();
    },
    onSuccess: (data: any) => {
      console.log("success");
      console.log(data);
    },
    onError: (error: any) => {
      console.log(error.response.data);
    },
  });
};

// update profile hook
export const useUpdateProfile = () => {
  return useMutation({
    mutationFn: (data: any) => {
      return apiLogin.updateProfile(data);
    },
    onSuccess: (data: any) => {
      console.log("success");
      console.log(data);
    },
    onError: (error: any) => {
      console.log(error.response.data);
    },
  });
};

// forgot password hook
export const useForgotPassword = () => {
  return useMutation({
    mutationFn: (data: any) => {
      return apiLogin.forgotPassword(data);
    },
    onSuccess: (data: any) => {
      console.log("success");
      console.log(data);
    },
    onError: (error: any) => {
      console.log(error.response.data);
    },
  });
};

// Change password hook
export const useChangePassword = () => {
  return useMutation({
    mutationFn: (data: any) => {
      return apiLogin.resetPassword(data);
    },
    onSuccess: (data: any) => {
      console.log("success");
      console.log(data);
    },
    onError: (error: any) => {
      console.log(error.response.data);
    },
  });
};

// verify email hook
export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: (data: any) => {
      return apiLogin.verifyOtp(data);
    },
    onSuccess: (data: any) => {
      console.log("success");
      console.log(data);
    },
    onError: (error: any) => {
      console.log(error.response.data);
    },
  });
};

// Logout hook
export const useLogout = () => {
  return useMutation({
    mutationFn: () => {
      return apiLogin.logout();
    },
    onSuccess: (data: any) => {
      console.log("success");
      console.log(data);
    },
    onError: (error: any) => {
      console.log(error.response.data);
    },
  });
};

// Delete account hook
export const useDeleteAccount = () => {
  return useMutation({
    mutationFn: () => {
      return apiLogin.deleteAccount();
    },
    onSuccess: (data: any) => {
      console.log("success");
      console.log(data);
    },
    onError: (error: any) => {
      console.log(error.response.data);
    },
  });
};
