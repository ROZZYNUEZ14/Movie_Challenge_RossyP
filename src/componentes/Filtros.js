import "./Filtros.css"


export function Filtro(){
    return <>
        <div className="contenedorFiltros">
            <label htmlFor="ordenar">Filtrar por: </label>
            <select name="name" id="ordenar" className="Ordenador">
                <option value="" disabled selected>--Elige una Opción--</option>
                <option value="asc">A - Z</option>
                <option value="desc">Z - A</option>
            </select>

            <label htmlFor="filtro">Filtrar por: </label>
            <select name="filtrar" id="filtro" className="filtrar">
                <option value="" disabled selected>--Elige una Opción--</option>
                <option value="fecha">Fecha</option>
                <option value="genero">Género</option>
          </select>
        </div>
    </>
}