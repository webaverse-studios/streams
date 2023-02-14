import { pipeStreamToFile } from './pipeStreamToFile.js'


const types = [
  {
    description: 'Zine',
    accept: {
      'application/octet-stream': ['.zine'],
    }
  }
]


/**
 * Save a stream by piping it to a file.
 * @param {ReadableStream} stream The stream to save.
 * @param {string} filename The suggested filename.
 * @param {string} id The file picker ID.
 * @returns {Promise<FileSystemFileHandle>} The file handle.
 */
export async function saveStream(
  stream = new ReadableStream(),
  filename = 'file.gz',
  id = 'download',
) {
  const handle = await window.showSaveFilePicker({
    types,
    suggestedName: filename,
    id: 'zine',
  })

  await pipeStreamToFile( stream, handle )
  return handle
}
