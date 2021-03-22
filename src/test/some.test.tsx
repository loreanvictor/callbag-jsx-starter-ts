import { should } from 'chai';
import { testRender } from 'test-callbag-jsx';

should();

describe('some test', () => {
  it('should render stuff.', () => {
    testRender((renderer, { $, render }) => {
      render(<h1>Hellow World!</h1>);
      $('body').text()!.should.equal('Hellow World!');
    });
  });
});
