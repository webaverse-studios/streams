
/**
 * Decompress a stream.
 * @param {Stream} stream The stream to decompress.
 * @returns {Stream} The decompressed stream.
 */
export function compressStream( stream ) {
  //noinspection JSUnresolvedFunction
  return stream.pipeThrough( new CompressionStream( 'gzip' ))
}
