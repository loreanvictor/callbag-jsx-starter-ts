import { makeRenderer } from 'callbag-jsx';
import { state } from 'callbag-state';
import { expr, filter, interval, map, pipe } from 'callbag-common';


const renderer = makeRenderer();
const name = state('World');
const timer = interval(1000);

const format = (n: string) => n[0].toUpperCase() + n.substr(1);
const displayName = pipe(
  name,
  filter(n => n.length > 0),
  map(format)
);

renderer.render(
  <>
    <div>Hellow {displayName}!</div>
    <input type='text' _state={name} placeholder='name ...'/>

    <br/><br/>

    <div><small>You have been here {expr($ => $(timer, -1) + 1)} seconds!</small></div>
  </>
).on(document.body);
