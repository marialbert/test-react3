import { Selector } from 'testcafe';
import percySnapshot from '@percy/testcafe';

fixture('MyFixture')
    .page('http://192.168.0.196:3000/test-react3');
  //.page('https://marialbert.github.io/test-react3/');

test('test', async t => {
  await t.typeText('#root .TodoSearch', 'Mabe test');
  await t.click(Selector('#root button').withText('+'))
  await t.typeText('#modal div form textarea', 'test')
  await t.click(Selector('#modal button').withText('Añadir'))
  await percySnapshot(t, 'TestCafe Example');
});