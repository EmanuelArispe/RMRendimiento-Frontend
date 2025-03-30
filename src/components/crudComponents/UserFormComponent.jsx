import {useState} from "react";

export default function UserFormComponent() {
    const [user, setUser] = useState([]);

    function handleSubmit(event) {
        event.preventDefault()
        const data = new FormData(event.target);

        const user = { name: data.get("name"),
                            email: data.get("email"),
                            password: data.get("password") }

        fetch('http://localhost:8080/api/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user) })
            .then(response => response.json())
            .then(data => {
                setUser(data);}
            );
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Nombre" name="name"/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Correo</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Correo" name="email"/>
            </div>
            <div className="form-group">
                <label htmlFor="pass">Password</label>
                <input type="password" className="form-control" id="pass" aria-describedby="pass" placeholder="Password" name="password" />
            </div>
            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
        {user && Object.keys(user).length > 0 && (
            <div>
                <h2>Respuesta del servidor:</h2>
                <pre>{JSON.stringify(user, null, 2)}</pre>
            </div>
        )}
        </>
        )
}