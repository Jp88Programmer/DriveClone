import mongoose from "mongoose";

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: [300, "Exceed name length"],
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: [true, "Email Already Exist,Use Another Email"],
    required: [true, "Email address is required"],
    validate: {
      validator: validateEmail,
      message: "Please Enter Valid email",
    },
  },
});

const User = mongoose.model("User", userSchema);

export default User;
