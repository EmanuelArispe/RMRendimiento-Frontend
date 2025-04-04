import {useEffect, useState} from "react";

// eslint-disable-next-line react/prop-types
export default function UserListComponent({tokenValue}) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const URL = 'http://localhost:8080/api/user';

    useEffect(() => {
        fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${tokenValue}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
    return (        <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Password</th>
        </tr>
        </thead>
        <tbody>
        {users.map((user) => (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
            </tr>
        ))}
        </tbody>
    </table>);}