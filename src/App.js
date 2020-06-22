import React, { Component } from 'react';
import './bootstrap.min.css';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';

class App extends Component {

  state = {
    termino: '',
    imagenes: [],
    pagina: ''
  }

  scroll = () => {
    const elemento  = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start')
  
  }

  paginaAnterior = () => {
    //leer el state de la pagia actual para saber donde esta
    let pagina = this.state.pagina;

    // si la pagina es 1 ya no ir mas hacia atras
    if(pagina === 1) return null;
    // luego  restar uno a la pagina actual
      pagina -= 1;
    // agregar elcambio al state para que no se quede en el 1
      this.setState({
        pagina
      }, ()=> {
        this.consultarApi();
        this.scroll();
      });

    // console.log(pagina);
  }

  paginaSiguiente = () => {
    //leer el state de la pagia actual para saber donde esta
      let pagina = this.state.pagina;
    // luego  sumar uno a la pagina actual
      pagina += 1;
    // agregar elcambio al state para que no se quede en el 1
      this.setState({
        pagina
      }, () => {
        this.consultarApi(); 
        this.scroll();
      });

    //console.log(pagina);
  }

  consultarApi = () => {
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=16922290-f47ac8af04843614068a84264&q=${this.state.termino}
    &per_page=28&page=${pagina}`;
    //console.log(url);

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({imagenes: resultado.hits}) )

  }


  datosBusqueda = (termino) => {
    this.setState({
      termino : termino,
      pagina: 1
    }, () => {
      this.consultarApi(); 
    })
  }

  render(){
  return (
    <div className="container">
      <div className="jumbotron">
        <p className=" lead text-center">Buscador de Imagenes</p>
            <br/>
            <br/>
            <Buscador
            datosBusqueda={this.datosBusqueda}
            />
      </div>
        <div className="row justify-content-center">
        <Resultado
          imagenes={this.state.imagenes}
          paginaAnterior={this.paginaAnterior}
          paginaSiguiente={this.paginaSiguiente}
        />
        </div>     
    </div>
  );
}
}

export default App;