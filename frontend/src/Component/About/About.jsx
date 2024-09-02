import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function About() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        fetch("http://localhost/reactcrudphp/aczone/authentification/api/users/")
        .then((response) => response.json())
        .then((responseJson)=>(
            console.log(responseJson),
            setUsers(responseJson)
        ));
    }


    return (
        <div className="container">
            <h1>Liste des utilisateurs</h1>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Numéro unique</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Mot de passe</th>
                    <th scope="col">Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                           
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
    )
}
