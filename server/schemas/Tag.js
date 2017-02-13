import mongoose, { Schema } from 'mongoose';
import URLSlugs from 'mongoose-url-slugs';

const TagSchema = new Schema({
  name: { type: String, trim:true, required: true },
}, { timestamps: true });
TagSchema.plugin(URLSlugs('name'));
export default mongoose.model('Tag', TagSchema);
