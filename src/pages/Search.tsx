import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Search() {
  const params = useParams();

  useEffect(() => {
    console.log(params.busqueda);
  }, [params]);

  return (
    <div>
      Soy el buscador
      <Link to="/">Link a la Home</Link>
    </div>
  );
}

export { Search };
