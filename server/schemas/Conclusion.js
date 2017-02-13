import mongoose, { Schema } from 'mongoose';
import URLSlugs from 'mongoose-url-slugs';

const ConclusionSchema = new Schema({
  creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  description: String,
  title: { type: String, required: true },
  topic: { type: Schema.Types.ObjectId, ref: 'Topic' },
  subscribers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });
ConclusionSchema.plugin(URLSlugs('title'));
export default mongoose.model('Conclusion', ConclusionSchema);
