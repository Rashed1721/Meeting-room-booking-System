import { jwtDecode } from "jwt-decode";

export const verifyToken = (token: string) => {
  console.log("token from verify", token);
  return jwtDecode(token);
};
