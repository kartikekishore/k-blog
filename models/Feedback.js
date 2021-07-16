const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  feedbackbody: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Feedback", FeedbackSchema);
