import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  selector,
  useSetRecoilState,
} from "recoil";

const queryState = atom({
  key: "query",
  default: "",
});

const resultsState = selector({
  key: "searchResults", // unique ID (with respect to other atoms/selectors)
  get: async ({ get }) => {
    const valorDeQuery = get(queryState);
    if (valorDeQuery) {
      const response = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=" + valorDeQuery
      );
      const json = await response.json();
      return json.results;
    } else {
      return [];
    }
  },
});

export function useSearchResults() {
  const params = useParams();
  const setRecoilQuery = useSetRecoilState(queryState);
  const query = params.query;
  const results = useRecoilValue(resultsState);

  useEffect(() => {
    setRecoilQuery(query);
  }, [query]);

  return results;
}
