import mongoose from "mongoose";

const biddingSchema = mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  seller_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  highestBidder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  start_price: {
    type: String,
    required: true,
    default: "0",
  },
  end_price: {
    type: String,
  },
  current_price: {
    type: String,
    required: true,
  },
  end_time: {
    type: Date,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
});

export default mongoose.model("Bidding", biddingSchema);
