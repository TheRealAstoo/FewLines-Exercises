import { Db } from "mongodb";

type Params = {
  query: {
    [key: string]: unknown;
  };
  page: number;
  resultsPerPage?: number;
};

type Game = {
  id: number;
  name: string;
  slug: string;
  [key: string]: unknown;
};

type Results = {
  totalCount: number;
  resultsPerPage: number;
  currentPage: number;
  pageCount: number;
  results: Game[];
};

export default function searchWithPagination(
  db: Db,
  { query, page = 1, resultsPerPage = 20 }: Params,
): Promise<Results> {
  // Complete the function here
}
