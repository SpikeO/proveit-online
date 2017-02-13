import mongoose, { Schema } from 'mongoose';

const TopicTypeSchema = new Schema({
  title: String
});
export default mongoose.model('TopicType', TopicTypeSchema);
