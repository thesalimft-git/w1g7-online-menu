import { Link } from "react-router-dom";


export default function RegisterPage() {
    return (
        <div>
            <form action="/action_page.php">
                <div class="mb-3 mt-3">
                    <label for="username" class="form-label">Username:</label>
                    <input type="username" class="form-control" id="username" placeholder="Enter username" name="username" />
                </div>
                <div class="mb-3">
                    <label for="pwd" class="form-label">Confirm Password:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                </div>
                <div class="mb-3">
                    <label for="pwd" class="form-label">Confirm Password:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter Confirm Password" name="pswd" />
                </div>
                <div class="form-check mb-3">
                    <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" name="remember" /> Remember me
                    </label>
                </div>
                <button type="submit" class="btn btn-primary">Register</button>
            </form>
            <Link to='/account'>
                have already an account, login
            </Link>
        </div>
    )
}
