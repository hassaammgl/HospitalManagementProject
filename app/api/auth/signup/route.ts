import { Admin } from "@/models";
import { hashPassword } from "@/actions";

export const POST = async (req: Request) => {
  console.time("signup");
  const {
    username,
    avatar,
    password,
    email,
    dob,
    gender,
    address,
    phone,
    userType,
  } = await req.json();

  const hashedPassword = await hashPassword(password);

  if (userType === "admin") {
    const { clinicOrHospitalName } = await req.json();

    const admin = await Admin.create({
      username,
      avatar,
      password: hashedPassword,
      email,
      dob,
      gender,
      address,
      phone,
      clinicOrHospitalName,
    });
  }
  if (userType === "docter") {
    const { specialties } = await req.json();
  }
  if (userType === "patient") {
  }

  console.timeEnd("signup");
  return Response.json({});
};
