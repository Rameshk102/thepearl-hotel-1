import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: [6, "Password should be at least 6 characters"],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  favorites: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Room",
    default: [],
  },
})

// Update the updatedAt field on save
UserSchema.pre("save", function (next) {
  this.updatedAt = new Date()
  next()
})

export default mongoose.models.User || mongoose.model("User", UserSchema)

