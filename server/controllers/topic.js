import * as topicService from '../services/topic.crud';

export async function create(req, res) {
  try {
    const { title } = req.body;
    const topic = await topicService.create(title);
    return res.json(topic);
  } catch (err) {
    console.log('Controllers::Topic:create::ERROR::', err);
    return Error('Controllers::Topic:create::ERROR');
  }
}
