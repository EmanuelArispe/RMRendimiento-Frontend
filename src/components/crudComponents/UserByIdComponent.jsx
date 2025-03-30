import {useState} from "react";

export default function UserByIdComponent() {
    const [user, setUser] = useState([]);

 function hadleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const id = data.get("id");
        fetch(`http://localhost:8080/api/user/${id}`)
            .then(response => response.json())
            .then(data => {
                setUser(data);
            });
 }

    return (
        <div>
            <h1>Buscar Usuario por ID</h1>
            <form onSubmit={hadleSubmit}>
                <label htmlFor={"users"}>
                    ID:
                    <input type="text" name="id" />
                </label>
                <button type="submit">Buscar</button>
            </form>
            {user && Object.keys(user).length > 0  &&(
                <div>
                    <h2>Respuesta del servidor:</h2>
                    <pre>{JSON.stringify(user, null, 2)}</pre>
                </div>
            )}
        </div>
    )
}