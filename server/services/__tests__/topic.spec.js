import * as topicService from '../topic.crud';

/** @test {Topic Controller#create} */
it('create a new topic', async() => {
  const topic = await topicService.create('Some new topic created by test');
  expect(topic.title).toEqual('Some new topic created by test');
});
// /** @test {Topic Controller#create} */
// it('create a new topic', async() => {
//   expect(async() => {
//     await topicService.create();
//   }).toThrow();
// });
