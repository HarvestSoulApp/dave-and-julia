const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const eventSchema = new Schema(
  {
    event: {
      title: String,
      description: String,
      location: String,
      date: Date,
      joining: [ref. User]
    },
  },

  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Event = model("Event", eventSchema);

module.exports = Event;
