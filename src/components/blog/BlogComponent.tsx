import React from 'react'
import { BlogContextProvider } from 'src/context/blog-context'
import { BlogRouter } from './BlogRouter'
import type { Keys } from 'src/util/types'

export const BlogComponent = ({ keys }: { keys: Keys }) => {
  return (
    <BlogContextProvider>
      <BlogRouter keys={keys} />
    </BlogContextProvider>
  )
}
