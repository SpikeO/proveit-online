import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  username: String,
  firstName: String,
  lastName: String,
}, { timestamps: true });
export default mongoose.model('User', UserSchema);
