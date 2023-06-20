const mongoose = required("mongoose");

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    required: [true, "role is required"],
    enum: ["admin", "organisation", "user", "hospital"],
  },
  name: {
    type: String,
    required: function () {
      if (this.role === "user" || this.role === "admin") {
        return true;
      }
      return false;
    },
  },
  organisationName: {
    type: String,
    required: function () {
      if (this.role === "organisation") {
        return true;
      }
      return false;
    },
  },
  hospital: {
    type: String,
    required: function () {
      if (this.role === "hospital") {
        return true;
      }
      return false;
    },
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "passowrd is required"],
  },
  website: {
    type: String,
  },
  address: {
    type: String,
    required: [true, "address is required"],
  },
  phone: {
    type: String,
    required: [true, "phone number is required"],
  },
});
