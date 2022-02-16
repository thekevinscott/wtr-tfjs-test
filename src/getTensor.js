import * as tf from '@tensorflow/tfjs/dist/tf.es2017';

export function getTensor() {
  return tf.ones([2, 2]);
}
