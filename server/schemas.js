import mongoose, { Schema } from 'mongoose';
import config from 'config';

mongoose.connect(`mongodb://${config.mongo.host}/${config.mongo.dbname}`);

const UserSchema = new Schema({
  name: String
});

export const UserModel = mongoose.model('User', UserSchema);
