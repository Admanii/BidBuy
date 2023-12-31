import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  // product_id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  // },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  datePosted: {
    type: Date,
    default: Date.now,
  },
  price: {
    type: Number,
    default: 0,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },

  Date: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("Product", productSchema);
