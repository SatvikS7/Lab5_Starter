// unit.test.js

import test from 'node:test';
import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';


//isPhoneNumber Tests:
test('Is 5 a number?', () => {
  expect(isPhoneNumber('5')).toBe(false);
});

test('Is 0000000000000000 a number?', () => {
  expect(isPhoneNumber('222222222222222')).toBe(false);
});

test('Is 571-233-5259 a number?', () => {
  expect(isPhoneNumber('571-233-5259')).toBe(true);
});

test('Is 866-246-6453 a number?', () => {
  expect(isPhoneNumber('866-246-6453')).toBe(true);
});



//isEmail Tests: 
test('Is a@a.c an email?', () => {
  expect(isEmail('a@a.c')).toBe(false);
});

test('Is a@abcdedf.thomas an email?', () => {
  expect(isEmail('a@abcdedf.thomas')).toBe(false);
});

test('Is s2sriram@ucsd.edu an email?', () => {
  expect(isEmail('s2sriram@ucsd.edu')).toBe(true);
});

test('Is john@gmail.com an email?', () => {
  expect(isEmail('john@gmail.com')).toBe(true);
});



//isStrongPassword Tests: 
test('Is 9 a strong password?', () => {
  expect(isStrongPassword('9')).toBe(false);
});

test('Is a#$^()adcUD an email?', () => {
  expect(isStrongPassword('a#--adcUD')).toBe(false);
});

test('Is password a strong password?', () => {
  expect(isStrongPassword('password')).toBe(true);
});

test('Is z7Cf1W a strong password?', () => {
  expect(isStrongPassword('z7Cf1W')).toBe(true);
});



//isDate Tests: 
test('Is /3/2000 a date?', () => {
  expect(isDate('/3/2000')).toBe(false);
});

test('Is 2000 a date?', () => {
  expect(isDate('2000')).toBe(false);
});

test('Is 99/99/9999 a date?', () => {
  expect(isDate('99/99/9999')).toBe(true);
});

test('Is 5/5/2024 a date?', () => {
  expect(isDate('5/5/2024')).toBe(true);
});



//isHexColor Tests: 
test('Is red a date?', () => {
  expect(isHexColor('red')).toBe(false);
});

test('Is 2000 a date?', () => {
  expect(isHexColor('2000')).toBe(false);
});

test('Is #25d5Cb a date?', () => {
  expect(isHexColor('#25d5Cb')).toBe(true);
});

test('Is 533dd3 a date?', () => {
  expect(isHexColor('533dd3')).toBe(true);
});

