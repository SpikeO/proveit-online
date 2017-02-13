import mongoose, { Schema } from 'mongoose';
import URLSlugs from 'mongoose-url-slugs';

const SourceSchema = new Schema({
  creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  description: String,
  title: { type: String, required: true },
  url: String,
  urlDomain: { type: Schema.Types.ObjectId, ref: 'UrlDomain' }
}, { timestamps: true });
SourceSchema.plugin(URLSlugs('title'));
export default mongoose.model('Source', SourceSchema);
