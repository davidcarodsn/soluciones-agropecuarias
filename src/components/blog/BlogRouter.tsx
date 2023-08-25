import React, { FC, useEffect, useState } from 'react'
import { useBlogContext } from 'src/context/blog-context';
import { BlogTypes } from 'src/context/types/blog';
import { getFacebookImagePosts, getFacebookPageAccessToken } from 'src/services/facebook-services';
import type { Keys } from 'src/util/types'

interface BlogRouterProps {
  keys: Keys
}

export const BlogRouter:FC<BlogRouterProps> = ({ keys }) => {
  const { state, dispatch }: any = useBlogContext();
  const [ pageAccessToken, setPageAccessToken ] = useState<string>();
  const [ isLoading, setIsLoading ] = useState<boolean>(true);
  const [ error, setError ]= useState<boolean>(false);

  useEffect(() => {
    if (state.keys?.FACEBOOK_PAGE_ID && state.keys?.FACEBOOK_TOKEN) {
      getFacebookPageAccessToken(state?.keys?.FACEBOOK_TOKEN, state.keys.FACEBOOK_PAGE_ID)
        .then(res => setPageAccessToken(res.access_token))
        .catch(error => {
          setError(true)
          setIsLoading(false)
          console.log(error)
        })
    }
  },[state.keys]);

  useEffect(() => {
    if (pageAccessToken) {
      getFacebookImagePosts(pageAccessToken, state.keys.FACEBOOK_PAGE_ID)
        .then(res => {
          dispatch({ type: BlogTypes.SET_FACEBOOK_POSTS, payload: res })
          setIsLoading(false);
        })
        .catch(error => {
          setError(true)
          setIsLoading(false)
          console.log(error)
        });
    }
  },[pageAccessToken])

  useEffect(() => {
    dispatch({ type: BlogTypes.SET_KEYS, payload: keys });
  }, [keys]);

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <div>BlogRouter</div>
  )
}
