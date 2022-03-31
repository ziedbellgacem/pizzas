const mongoose = reaquire("mongoose");
const schema = mongoose.Schema;
const pizzaSchema = new schema(
  {
    name: {
      type: String,
      require: true,
    },
    variants: [],
    price: [],
    category: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Pizza", pizzaSchema);
