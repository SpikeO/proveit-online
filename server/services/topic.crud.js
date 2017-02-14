import Topic from '../schemas/Topic';

export async function create(title: string) {
  return await new Topic({ title }).save();
}