
// eslint-disable-next-line react/prop-types
export default function Login({addToken}) {

    function handleSubmitLogin(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const user = {name: data.get("user"), password: data.get("password")};

        fetch("http://localhost:8080/api/authenticate",
            {method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(user)})
            .then(response => response.json())
            .then(data => {
                const token = data.id_token;
                addToken(token);
                });
    }

    return (
        <form onSubmit={handleSubmitLogin}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="user">Usuario</label>
                    <input id="user" type="text" name="user" />
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password" />
                </div>
            </div>

            <p className="form-actions">
                <button type="reset" className="button button-flat">Reset</button>
                <button type="submit" className="button">Login</button>
            </p>
        </form>
    );
}