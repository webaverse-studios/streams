import { decompressStream } from './decompressStream.js'


/**
 * Decompress a blob by piping it through a decompression stream.
 * @param {Blob} blob The blob to decompress.
 * @returns {Stream} The decompressed stream.
 */
export function decompressBlob( blob ) {
  //noinspection JSUnresolvedFunction
  return decompressStream( blob.stream())
}
