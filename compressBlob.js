import { compressStream } from './compressStream.js'


/**
 * Compress a blob by piping it through a compression stream.
 * @param {Blob} blob The blob to compress.
 * @returns {Stream} The compressed stream.
 */
export function compressBlob( blob ) {
  //noinspection JSUnresolvedFunction
  return compressStream( blob.stream())
}
