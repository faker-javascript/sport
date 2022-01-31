import test from 'ava';
import sport from './index.js';

test('sport unusual return type to be string', t => {
    t.is(typeof sport().unusual(), 'string');
});

test('sport ancient olympics return type to be string', t => {
    t.is(typeof sport().ancientOlympics(), 'string');
});

test('sport summer olympics return type to be string', t => {
    t.is(typeof sport().summerOlympics(), 'string');
});

test('sport summer paralympics return type to be string', t => {
    t.is(typeof sport().summerParalympics(), 'string');
});

test('sport winter olympics return type to be string', t => {
    t.is(typeof sport().winterOlympics(), 'string');
});

test('sport winter paralympics return type to be string', t => {
    t.is(typeof sport().winterParalympics(), 'string');
});
