import jsonwebtoken from "jsonwebtoken";

export const createJwt = (payload: any) => {
  return jsonwebtoken.sign(payload, process.env.JWT_SECRET!, {
    algorithm: "RS384",
    expiresIn: "1d",
  });
};

export const verifyJwt = (payload: any) => {
  return jsonwebtoken.verify(payload, process.env.JWT_SECRET!);
};
