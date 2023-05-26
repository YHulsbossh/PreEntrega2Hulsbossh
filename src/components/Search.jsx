import search from "../images/search.svg"

function Search() {
    return (
      <div className="busqueda">
        <input className="input" type="text" placeholder="Buscar..." />
        <button className="btn boton"><img src={search} alt="buscador"/></button>
      </div>
    );
  }

export default Search;