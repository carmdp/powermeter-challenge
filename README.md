## Challenge Técnico- FULL STACK JS

---

### _DESAFIO_


Implementar una o dos pantallas que permitan visualizar la información relevada por distintos medidores de corriente en forma grafica e intuitiva para el usuario.
Los datos deberán ser consultados a la API según se detalla más adelante:

**DESCRIPCION:**
Se debe poder visualizar la jerarquía del cliente, recorriendo la estructura de datos de tipo arbol. El endpoint responderá en formato JSON con la siguiente estructura:


>{
>   
>  **"nombre":**'Embarque',
>
>  **"id":** 1327,
>
>  **"level_nombre":**'sublocalización",
>
>  **"level":** 4,
>
>  **"virtual":** false,
>
>  **"hijos":** [],
>
>  **"parent":** 1325
>
>}

Nótese que los medidores se encuentran ordenados en base al nivel y un padre contiene a todos sus hijos.

Los usuarios deberan poder seleccionar un medidor/nodo para visualizar sus datos y cada medidor dispondra de dos variables, para que de alguna forma el usuario pueda seleccionar cual desea graficar.


>{
>
>  **"sync_timestamp":**"2022-06-29T12:55:00Z",
>
>  **"kW":** 11.0,
>
>  **"kVar":** 26.0,
>
>}

Es importante graficar y que se pueda hacer zoom únicamente en la variable que seleccionó el usuario al interactuar.