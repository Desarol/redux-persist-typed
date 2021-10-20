const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const reducerConfig = require('./reducer-config')

describe('redux-persist-typed', () => {
  it('should require a version bump when the types.ts file changes', async () => {
    const currentReducerTypeFileContents = await fs.promises.readFile(
      path.join(__dirname, 'types.ts'),
      'utf8',
    )

    const currentReducerTypeHash = (
      crypto
      .createHash('md5')
      .update(currentReducerTypeFileContents)
      .digest()
      .toString('hex')
    )

    // Update the "version" and "hash" in reducer-config.js
    expect(reducerConfig.hash).toEqual(currentReducerTypeHash)
  })
})