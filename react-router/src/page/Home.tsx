import { Link, useSearchParams } from 'react-router-dom';
import { users } from '../db';

function Home() {
    const [readDearchParms, setReadDearchParms] = useSearchParams();
    console.log(readDearchParms.get('id'));

    return(
        <div>
            <h1>Home</h1>
            <ul>
                {users.map(e => (
                    <li key={e.id}>
                        <Link to={`/user/${e.id}`} >
                            {e.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;