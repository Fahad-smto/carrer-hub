 
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1>Error happend</h1>
            <Link to ='/'>Back to home</Link>
        </div>
    );
};

export default ErrorPage;