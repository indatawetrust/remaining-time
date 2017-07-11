import test from 'ava';
import rt from './rt';

test('tests', t => {
  t.deepEqual(rt.m(1), { day: 0, hour: 0, minute: 0, second: 59 })
  t.deepEqual(rt.h(12), { day: 0, hour: 11, minute: 59, second: 59 })
  t.deepEqual(rt.s(150), { day: 0, hour: 0, minute: 2, second: 29 })
  t.deepEqual(rt.d(5.5), { day: 5, hour: 11, minute: 59, second: 59 })
  t.deepEqual(rt.date(new Date().getTime()+5000), { day: 0, hour: 0, minute: 0, second: 5 })
});
