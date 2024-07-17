export interface ValidateData {
  username: string;
  avatar: string;
  password: string;
  email: string;
  dob: string;
  gender: "male" | "female" | "other";
  clinicOrHospitalName?: string;
  address: string;
  phone: string | number;
  userType: "admin" | "docter" | "patient";
}

// https://ae01.alicdn.com/kf/HTB1DMfDHVXXXXXRXpXXq6xXFXXXN/Japanese-sailor-suit-Anime-cosplay-costume-Girls-High-school-student-uniform-Long-sleeve-JK-uniform-sexy.jpg