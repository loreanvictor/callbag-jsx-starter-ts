import { makeRenderer } from 'callbag-jsx';

const renderer = makeRenderer();
renderer.render(<div>Hellow World!</div>).on(document.body);
