import * as TopicController from '../controllers/topic';

export default (app) => {
  // Button - Delete a button
  app.post('/topic', TopicController.create);
};
