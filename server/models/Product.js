import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true, },
    img: { type: String, required: true },
    categories: { type: Array },
    price: { type: Number, required: true },
    size: { type: Array },
    color: { type: Array },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const ProductModel = mongoose.model('products', ProductSchema);

export default ProductModel;