import mongoose, { Schema } from 'mongoose';
import URLSlugs from 'mongoose-url-slugs';

const TopicSchema = new Schema({
  creator: { type: Schema.Types.ObjectId, ref: 'User' },
  description: String,
  facts: [{ type: Schema.Types.ObjectId, ref: 'Fact' }],
  featured: Boolean,
  hasDate: Boolean,
  status: { type: Schema.Types.ObjectId, ref: 'Status' },
  title: String,
  type: { type: Schema.Types.ObjectId, ref: 'TopicType' },
}, { timestamps: true });
TopicSchema.plugin(URLSlugs('title'));
export default mongoose.model('Topic', TopicSchema);
