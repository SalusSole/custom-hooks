<div align="center">
    <h1>Custom Hooks Personales</h1>
    <p>
        Un repositorio con mis hooks personales, el cual nació tras la necesidad de no reinventarme a mi mismo y a su vez, ayudar a quien lo pueda necesitar 
    </p>
    <br/>
    <hr/>
</div>

### Contenidos
- [useCounter](#useCounter)
- [useFetch](#useFetch)
- [useForm](#useForm)

### useCounter

```
const { counter, increment, decrement, handleReset } = useCounter();
```

Retorna un objeto con el estado del contador y tres funciones para establecer y actualizar el estado.

Puede establecer el estado inicial pasándolo como primer argumento. Por defecto es `1`.

El valor del counter siempre será de tipo `number` y no puede ser mutado directamente, en su lugar debe usar las siguientes funciones:

- `increment()`
    Puede o no recibir un argumento, el cual determina el factor de incremento. Por defecto es `1`.

- `decrement()`
    Puede o no recibir un argumento, el cual determina el factor de decremento. Por defecto es `1`.

- `handleReset()`
    Se encarga de restaurar el valor del contador al mismo del estado inicial, ya sea el que le haya pasado como argumento cuando inicializó el contador o el valor por defecto.
    

### useFetch

```
const results = useFetch();
```

Retorna el resultado de la consulta a la url que debe indicar como primer argumento obligatorio.

> **NOTA**: Debe ser adaptado a cada API.

### useForm

```
const { formState, handleInputChange, handleReset } = useForm();
```

Retorna un objeto con el estado del formulario, una función para actualizarlo y otra para resetear los valores del mismo.

Para inicializar el formulario debe pasar obligatoriamente como primer argumento un objeto con las entradas que tendrá. Por ejemplo:

```
{
    name: "",
    email: "",
}
```
Puede indicar dichas entradas con un valor por defecto o no. En este caso no tienen ningún valor inicial.

A continuación encontrará con más detalle los elementos que retorna el hook:

- `formState`
    Este es un objeto que se define igual que el estado inicial y contiene los valores actualizados de cada entrada del formulario. Por lo tanto, debe usar cada entrada en el valor del input correspondiente.
    ```
    <input name="name" value={formState.name} />
    ```

- `handleInputChange`
    Esta función se debe disparar cada vez que hay un cambio en el input y recibe el evento del onChange.
    ```
    <input name="name" value={formState.name} onChange={handleInputChange} />
    ```

- `handleReset`
    Esta función no recibe como argumento ningún valor, ya que solo establece el estado de las entradas del formulario como un `string` vacío.