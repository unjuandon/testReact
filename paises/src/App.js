import './App.css';
import axios from 'axios'
import React, {Component} from 'react'





export default class Paises extends Component {
  
  state = {paises:[], elegido:""}
  componentDidMount() {        
    axios.get("https://restcountries.eu/rest/v2/all")
    .then((response)=>{
      console.log(response);      
      this.setState({paises:response.data})
    }).catch((error)=>{
      console.log(error);
    });
  }


  Insertar(event)
  {    
    var validarPais = document.getElementById('pais').value
    var validarNombre = document.getElementById('nombre').value
    if(!validarNombre)
    {
      alert('Debe ingresar un nombre')   
    }
    else
    {
      axios.post("http://localhost:3001/api/insert", {
        nombre:validarNombre,
        pais:validarPais
      }).then(alert('registro exitoso'))     
    }
  }








  render(){
    
    return (           
      <div className="App">                          
        <div className="form-group" class="w3-card">        
        <form name="formulario">          
          <label className="nombre">Nombre:</label>
          <br/>
          <input name="nombre" id="nombre" className="form-group" placeholder="Ingrese su nombre"/>          
            <br/>
            <br/>
          <label className="pais">País:</label>
          <br/>
            <select className="form-control" id="pais" name="pais" onChange={this.Cambiar}>
            {this.state.paises.map(elemento=>(
              <option key={elemento.name} value={elemento.name}>{elemento.name}</option>
            ))}
          </select>  
          <br></br>
          <div>
            <br/>
            <button type="submit" onClick={this.Insertar}>Enviar</button>
            
          </div>
        </form>        
        </div>
            
      </div>
    );
  }


}


    



