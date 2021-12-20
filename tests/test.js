import { Selector } from 'testcafe';
import percySnapshot from '@percy/testcafe';

fixture('MyFixture')
  .page('./index.js');

test('test', async t => {
  await t.typeText('#root .TodoSearch', 'Mabe test');
  await t.click(Selector('#root button').withText('+'))
  await t.typeText('#modal div form textarea', 'test')
  await t.click(Selector('#modal button').withText('Añadir'))
  await percySnapshot(t, 'TestCafe Example');
});