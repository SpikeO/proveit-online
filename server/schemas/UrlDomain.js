import mongoose, { Schema } from 'mongoose';

const UrlDomainSchema = new Schema({
  domain: { type: String, trim:true },
  sources: [{ type: Schema.Types.ObjectId, ref: 'Source' }],
  type: { type: Schema.Types.ObjectId, ref: 'UrlDomainType' }
}, { timestamps: true });
export default mongoose.model('UrlDomain', UrlDomainSchema);
