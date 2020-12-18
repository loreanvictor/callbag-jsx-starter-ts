import { makeRenderer } from 'callbag-jsx';
import { state } from 'callbag-state';
import { expr, interval } from 'callbag-common';


const renderer = makeRenderer();
const name = state('World');
const timer = interval(1000);

renderer.render(
  <>
    <div>Hellow {name}!</div>
    <input type='text' _state={name} placeholder='name ...'/>

    <br/><br/>

    <div><small>You have been here {expr($ => $(timer, -1) + 1)} seconds!</small></div>
  </>
).on(document.body);
