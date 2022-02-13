import * as tf from '@tensorflow/tfjs';

export function getTensor() {
  return tf.ones([2, 2]);
}
