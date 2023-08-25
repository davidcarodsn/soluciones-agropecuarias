const BASE_URL = 'https://graph.facebook.com';

export async function getFacebookPageAccessToken(FACEBOOK_LONG_LIVED_TOKEN: string, FACEBOOK_PAGE_ID: string) {
  try {
    const response = await fetch(`${BASE_URL}/${FACEBOOK_PAGE_ID}?fields=access_token&access_token=${FACEBOOK_LONG_LIVED_TOKEN}`);

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getFacebookImagePosts(FACEBOOK_PAGE_TOKEN: string, FACEBOOK_PAGE_ID: string) {
  try {
    const dataFetched = await fetch(`${BASE_URL}/${FACEBOOK_PAGE_ID}/feed?access_token=${FACEBOOK_PAGE_TOKEN}&fields=attachments,created_time,icon,comments{from{name, id, picture}, id , message, created_time, attachment}`)
    const data = await dataFetched.json();

    const dataFiltered = data.data.filter((post: any)=> post?.attachments?.data[0]?.type === 'photo');

    return dataFiltered.map((post: any) => ({
      comments: post.comments?.data,
      created_time: post.created_time,
      icon: post.icon,
      ...post.attachments.data[0],
      image: post.attachments.data[0].media.image,
      media: undefined
    }));
  } catch (error) {
    throw new Error('getFacebookImagePosts error handler')
  }
}
