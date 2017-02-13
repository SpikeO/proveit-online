import mongoose, { Schema } from 'mongoose';
import URLSlugs from 'mongoose-url-slugs';

const FactSchema = new Schema({
  creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  description: String,
  sources: [{ type: Schema.Types.ObjectId, ref: 'Source' }],
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
  title: { type: String, trim:true, required: true },
}, { timestamps: true });
FactSchema.plugin(URLSlugs('title'));
export default mongoose.model('Fact', FactSchema);
