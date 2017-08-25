import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

class Upload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            materia: '',
            titulo: '',
            precio: '',
            facebook: '',
            submit: true,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }




    writeUserData() {
        firebase.database().ref('object').push({
          materia: this.state.materia,
          titulo: this.state.titulo,
          precio : this.state.precio,
          facebook: this.state.facebook
        });

        this.setState({
            materia: '',
            titulo: '',
            precio : '',
            facebook: ''

        })



      }


    handleSubmit(e){
        this.writeUserData();
        e.preventDefault();

    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Materia: </label>
                    <input type='text' value={this.state.materia} onChange={this.handleChange}  required name='materia' />
                    <br />
                    <label> Titulo del apunte: </label>
                    <input type='text' value={this.state.titulo} onChange={this.handleChange} required name='titulo' />
                    <br />
                    <label> Precio: </label>
                    <input type='text' value={this.state.precio} onChange={this.handleChange} required name='precio' />
                    <br />
                    <label> Perfil de facebook: </label>
                    <input type='text' value={this.state.facebook} onChange={this.handleChange} required name='facebook' />
                    <hr />
                    <input type='submit' value='Subir' />
                </form>

            <h1> </h1>

            </div>
        )
    }
}

export default Upload;