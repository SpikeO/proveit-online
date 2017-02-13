import mongoose, { Schema } from 'mongoose';

const UrlDomainTypeSchema = new Schema({
  name: String,
}, { timestamps: true });
export default mongoose.model('UrlDomainType', UrlDomainTypeSchema);
