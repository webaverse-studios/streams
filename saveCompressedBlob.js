import { compressBlob } from './compressBlob.js'
import { pipeStreamToFile } from './pipeStreamToFile.js'


const types = [
  {
    description: 'Zine',
    accept: {
      'application/gzip': ['.gz'],
    }
  }
]


/**
 * Compress and save a blob.
 * @param {Blob} blob The blob to save.
 * @param {string} filename The suggested filename.
 * @param {string} id The file picker ID.
 * @returns {Promise<FileSystemFileHandle>} The file handle.
 */
export async function saveCompressedBlob(
  blob = new Blob(),
  filename = 'file.gz',
  id = 'download',
) {
  const
    stream = compressBlob(blob),

    handle = await window.showSaveFilePicker({
      types,
      suggestedName: filename,
      id: 'zine',
    });

  await pipeStreamToFile( stream, handle );
  return handle;
}
