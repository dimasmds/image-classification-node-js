import tf from '@tensorflow/tfjs-node';
import * as path from 'path';
import * as fs from 'fs';
import { indexOfMaxNumber } from './utils.js';

async function loadModel() {
  const modelUrl = tf.io.fileSystem(
    path.join(process.cwd(), 'models', 'model.json'),
  );
  const metadata = JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), 'models', 'metadata.json'),
      { encoding: 'utf-8' },
    ),
  );

  const model = await tf.loadLayersModel(modelUrl);
  model.classes = metadata.labels;

  return model;
}

async function predict(model, image) {
  const result = await model.predict(image).data();
  const index = indexOfMaxNumber(result);

  return model.classes[index];
}

function transformImage(image) {
  return tf.node
    .decodeImage(image, 3)
    .expandDims()
    .resizeNearestNeighbor([224, 224])
    .div(tf.scalar(127))
    .sub(tf.scalar(1));
}

export { transformImage, loadModel, predict };
