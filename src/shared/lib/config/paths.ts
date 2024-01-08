export const BASE_PATH = '/vite-template';

export const PATH_PAGE = {
  root: `${BASE_PATH}/`,
  dashboard: `${BASE_PATH}/dashboard`,
  todo: `${BASE_PATH}/to-do`,
  profile: `${BASE_PATH}/profile`,
  about: `${BASE_PATH}/about`,
  page404: `${BASE_PATH}/404`,

  login: `${BASE_PATH}/login`,
  logout: `${BASE_PATH}/logout`,

  // не используются
  // profile: {
  //   root: (username: string) => `${BASE_PATH}/profile/${username}`,
  //   favorites: (username: string) =>
  //     `${BASE_PATH}/profile/${username}/favorites`,
  // },
  editor: {
    root: '${BASE_PATH}/editor',
    edit: (slug: string) => `${BASE_PATH}/editor/${slug}`,
  },
};
