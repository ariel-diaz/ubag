import React from 'react';
import * as firebase from 'firebase';


class Listado extends React.Component {

    constructor(props) {
        super(props);

        this.db = firebase.database().ref().child('object');

        this.state = {
            apuntes: []
        }
    }

    componentDidMount() {
        const previousNotes = this.state.apuntes;
        this.db.on('child_added', snap => {
            previousNotes.push({
                id: snap.key,
                titulo: snap.val().titulo,
                materia: snap.val().materia,
                precio: snap.val().precio,
                facebook: snap.val().facebook
            })

            this.setState({
                apuntes: previousNotes
            })
        })
    }

    render() {
        const listas = this.state.apuntes.map((index, key) => {
            return (<div>
                <li value="key" >{index.materia} - {index.titulo} - {index.precio} - {index.facebook} </li>
            </div>)
        });
        return <ul>{listas} </ul>
    }





}

export default Listado;