import React, { useState } from "react";
import { useSearchResults } from "../hooks";
import { Outlet, useNavigate } from "react-router-dom";
import { MainButton } from "../ui/buttons";

function SearchForm() {
  const navigate = useNavigate();
  // const results = useSearchResults();
  function handleSubmit(e) {
    e.preventDefault();
    const query = e.target.query.value;
    navigate("/search/" + query, { replace: true });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="query" />
      <MainButton>Buscar</MainButton>
      {/* <h4>Resultados: {results.length}</h4> */}
    </form>
  );
}

export { SearchForm };
