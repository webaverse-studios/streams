
/**
 * Pipe a response to a file.
 * @param {Stream} stream The response to pipe.
 * @param {FileSystemFileHandle} handle The file handle.
 * @returns {stream} The stream.
 */
export function pipeStreamToFile( stream, handle) {
  handle.createWritable().then( writable => {
    new Response( stream ).body.pipeTo( writable )
  })

  return stream
}
