import "./Filtros.css"


export function Filtro(){
    return <>
        <div className="contenedorPrincipalFil">
            <div className="contenedorOrdenar">
                <label htmlFor="ordenar" className="textoOrdenar">Ordenar por: </label>
                <select name="name" id="ordenar" className="ordenador">
                    <option value="" disabled selected>--Elige una Opción--</option>
                    <option value="asc">A - Z</option>
                    <option value="desc">Z - A</option>
                </select>
            </div>

            <div className="contenedorFiltrar">
                <label htmlFor="filtro" className="textoFiltrar">Filtrar por: </label>
                <select name="filtrar" id="filtro" className="filtrar">
                    <option value="" disabled selected>--Elige una Opción--</option>
                    <option value="fecha">Fecha</option>
                    <option value="genero">Género</option>
                </select>
            </div>

            <div className="contenedorBoton">
                <button className="botonLimpiar">Limpiar</button>
            </div>
          
        </div>
    </>
}