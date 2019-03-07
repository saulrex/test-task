
export const searchRepositories = (q) => `${process.env.REACT_APP_API_URL}/search/repositories?q=${q}`;