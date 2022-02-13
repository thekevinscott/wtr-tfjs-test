import { expect } from '@esm-bundle/chai';
import { getTensor } from './getTensor';

it('creates a tensor', () => {
  const tensor = getTensor();
  expect(tensor.shape).to.equal([2, 2])
});
