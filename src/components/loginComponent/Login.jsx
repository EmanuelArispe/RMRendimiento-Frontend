export default function Login() {

    function handleSubmit(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries()); // Convert FormData to object
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" />
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