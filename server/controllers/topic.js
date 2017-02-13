import Topic from '../schemas/Topic';

export async function create(title: string) {
  try {
    return new Topic({ title }).save();
  } catch (err) {
    console.log('Controllers::Topic:create::ERROR::', err);
    return Error('Controllers::Topic:create::ERROR');
  }
}
