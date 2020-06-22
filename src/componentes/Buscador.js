import React, { Component } from 'react';

class  Buscador extends Component {

    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();
        // en termino se toma el valor que se ingresa al imput
        const termino = this.busquedaRef.current.value;
       // aqui se envia al componente principal para su busqueda  
        this.props.datosBusqueda(termino);
    }

   render() { 
        return ( 
            <form onSubmit={this.obtenerDatos} >
                <div className="row">
                   
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type ="text" className="form-control form-control-lg"
                        placeholder="Burcar una imagen. Ejemplo: Karatedo"/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type ="submit" className="btn btn-lg btn-danger btn-block"
                        value="Buscar"/>
                    </div>
                </div>
            </form> 
        );
    }
}

 
export default Buscador;