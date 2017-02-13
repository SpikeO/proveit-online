import mongoose, { Schema } from 'mongoose';

const StatusSchema = new Schema({
  title: String
});
export default mongoose.model('Status', StatusSchema);
