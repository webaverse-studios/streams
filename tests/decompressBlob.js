import o from 'ospec'
import { decompressBlob, compressBlob } from '../index.js'

const
  blob = new Blob([ 'Hello, world!' ], { type: 'text/plain' }),
  compressedStream = compressBlob( blob ),
  compressedBlob = await new Response( compressedStream ).blob()

o.spec( 'decompressBlob', async () => {
  o( 'returns a readable stream', () => {
    o( compressedStream instanceof ReadableStream ).equals( true )
  })

  o( 'decompresses to original blob size', async () => {
    const
      decompressedStream = await decompressBlob( compressedBlob ),
      decompressedBlob = await new Response( decompressedStream ).blob()

    o( blob.size ).equals( decompressedBlob.size )
  })

  // TODO: Compare hashes of blobs.
  // o( 'decompresses to original blob', async () => {})
})
