export type Game = {
  name: string;
  slug: string;
  summary: string;
  cover: {
    thumbnail: stirng;
    url: string;
  };
  [key: string]: unknown;
};

export type Platform = {
  name: string;
  slug: string;
  games: Pick<Game, "slug" | "cover" | "name">[];
  [key: string]: unknown;
};
