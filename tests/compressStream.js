import o from 'ospec'
import { compressStream, decompressStream } from '../index.js'

const
  data = 'Hello, world!',

  stream = new ReadableStream({
    start( controller ) {
      controller.enqueue( data )
      controller.close()
    },
  }),

  compressedStream = compressStream( stream ),
  decompressedStream = await decompressStream( compressedStream )

o.spec( 'compressStream', async () => {
  o( 'returns a readable stream', () => {
    o( compressedStream instanceof ReadableStream ).equals( true )
    o( decompressedStream instanceof ReadableStream ).equals( true )
  })

  o( 'decompresses to original stream contents', async () => {
    // decompress stream into a string
    const
      reader = decompressedStream.getReader(),
      result = await reader.read(),
      decompressedData = new TextDecoder().decode( result.value )

    o( data ).equals( decompressedData )
  })
})
