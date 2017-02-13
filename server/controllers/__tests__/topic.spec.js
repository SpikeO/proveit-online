import * as topicController from '../topic';

/** @test {Topic Controller#create} */
it('create a new topic', async() => {
  const topic = await topicController.create('Some new topic created by test');
  expect(true).toEqual(true);
});
/** @test {Topic Controller#create} */
it('create a new topic', async() => {
  expect(async() => {
    await topicController.create();
  }).toThrow();
});
