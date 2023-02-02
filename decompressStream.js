
/**
 * Decompress a stream.
 * @param {Stream} stream The stream to decompress.
 * @returns {Stream} The decompressed stream.
 */
export function decompressStream( stream ) {
  //noinspection JSUnresolvedFunction
  return stream.pipeThrough( new DecompressionStream( 'gzip' ))
}
