/*clase*/
class Articulo {
  titulo:string; 
  autor:string;
  precio:number;
}

class Buscador {
    //atributos
    claveBusqueda: string;
    articulos: Articulo[];

    //metodos
    buscar(): void {
        console.log(`buscando con la clave ${this.claveBusqueda}`);
    }
}

//definir un tipo de objeto
interface Producto {
    id: number,
    nombre: string,
}

function comprar(prod:Producto): void{
    
}

//invoke
const unP:Producto = {
    id:1,
    nombre:'papel'
};

comprar(unP);
