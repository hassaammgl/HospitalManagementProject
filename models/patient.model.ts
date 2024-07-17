import mongoose, { Schema } from "mongoose";

const patientSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  registeredAt: {
    type: Date,
    default: Date.now,
  },
  appointments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Appointment",
    },
  ],
  previousConsults: [
    {
      type: Schema.Types.ObjectId,
      ref: "PreviousConsult",
    },
  ],
  reports: [
    {
      type: Schema.Types.ObjectId,
      ref: "Report",
    },
  ],
});

export const Patient = mongoose.model("Patient", patientSchema);
