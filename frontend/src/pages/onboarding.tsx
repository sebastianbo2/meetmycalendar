import { Link } from "react-router-dom";

const Onboarding = () => {
    return (
        <div>
            <p>
                Hello world main
            </p>
            <Link to={"/login"}>Login</Link>
        </div>
    )
}

export default Onboarding;