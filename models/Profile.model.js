const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const profileSchema = new Schema(
  {
    profile: {
      name: String,
      age: Date,
      gender: ['male', 'female','neutral'],
      genderPreference: ['male', 'female','any'],
      occupation: String,
      hobbies: [String]
    },

    passwordHash: {
      type: String,
      required: [true, 'Password is required'],
    },

    accountId: {
        type: Schema.Types.ObjectId,
              ref: "User"
      }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Profile = model("Profile", profileSchema);

module.exports = Profile;
