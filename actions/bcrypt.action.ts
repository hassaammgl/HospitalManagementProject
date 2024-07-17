import bcryptjs from 'bcryptjs';


export const hashPassword = (password: string) => {
    return bcryptjs.hash(password, 10);
};

export const verifyPassword = (password: string, hashedPassword: string) => {
  return bcryptjs.compare(password, hashedPassword);
};