import * as path from 'path';
import * as fs from 'fs';
import FormData from 'form-data';
import streamToPromise from 'stream-to-promise';

export async function buildImagePayload(filename) {
  const image = fs.createReadStream(
    path.join(process.cwd(), 'src', '_test', 'fixtures', filename),
  );

  const formData = new FormData();
  formData.append('image', image);

  const payload = await streamToPromise(formData);
  const headers = formData.getHeaders();

  return { payload, headers };
}
