import axios from "axios";
import { userData } from "@/pages/get-started";
import { LoginDataType } from "@/pages/login";
import { profileDataType } from "@/components/DashboardComponent/SettingsNavbar/SettingContent/ProfileContent";
import { getCookie } from "cookies-next";

export const userToken = getCookie("userData");

// GE ALL USERS
export async function getAllUsers() {
  const response = await axios.get(`${process.env.API_BASE_URL}/users`);

  return response.data;
}

// GET SINGLE USER
export async function getSingleUser() {
  const response = await axios.get(
    "https://oakandd-api.onrender.com/users/single",
    {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }
  );

  return response.data;
}

// REGISTER USER
export async function createUser(body: userData) {
  const response = await axios.post(
    "https://oakandd-api.onrender.com/auth/user/register",
    JSON.stringify(body),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  console.log(body);
  console.log(response);

  return response.data;
}

// UPDATE USER PROFILE
export async function updateUserProfile(body: profileDataType) {
  const response = await axios.post(
    `https://oakandd-api.onrender.com/users/update-profile`,
    body,
    { headers: { Authorization: `Bearer ${userToken}` } }
  );

  return response.data;
}

// VERIFY USER
export type verifyUserData = {
  email: string;
  verificationCode: string;
};

export async function verifyUser(code: verifyUserData) {
  const response = await axios.post(
    "https://oakandd-api.onrender.com/auth/user/verify",
    code
  );

  return response.data;
}

// LOGIN USER
export async function loginUser(body: LoginDataType) {
  const response = await axios.post(
    "https://oakandd-api.onrender.com/auth/user/login",
    body
  );

  return response.data;
}

// FORGOT PASSWORD
export type forgotPasswordType = {
  email: string;
};
export async function forgotPassword(body: forgotPasswordType) {
  const response = await axios.post(
    "https://oakandd-api.onrender.com/auth/user/reset-password",
    body
  );

  return response.data;
}

// VERIFY PASSWORD OTP
export type passwordOTP = {
  email: string;
  verificationCode: string;
};
export async function verifyPasswordOTP(body: passwordOTP) {
  const response = await axios.post(
    "https://oakandd-api.onrender.com/auth/user/verify-password-reset",
    body
  );

  return response.data;
}

// NEW PASSWORD
export type newPasswordType = {
  email: string;
  newPassword: string;
  confirmPassword: string;
};
export async function newPassword(body: newPasswordType) {
  const response = await axios.post(
    "https://oakandd-api.onrender.com/auth/user/add-new-password",
    body
  );

  return response.data;
}

// DELETE USER
export async function deleteUser(id: string) {
  const response = await axios.delete(
    `https://oakandd-api.onrender.com/users/${id}`,
    {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }
  );

  return response.data;
}

// Get User Package
export async function getUserPackage(packages: string[]) {
  const response = await axios.post(
    "https://oakandd-api.onrender.com/package/get-packages",
    { packages },
    {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }
  );

  return response.data;
}
