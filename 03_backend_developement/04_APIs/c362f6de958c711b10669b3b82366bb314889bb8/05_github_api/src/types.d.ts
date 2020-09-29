// use this type as an example for the other types you'll have to write
export interface ProjectInformations {
  description: string;
  language: string;
  subscribers_count: string;
  stargazers_count: string;
  git_url: string;
}

// use this type as an example for the other callback function typing
export type GetProfileCallback = (
  error: null | Error,
  url?: string,
) => void
