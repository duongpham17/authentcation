
import { useAppSelector } from '@redux/hooks/useRedux';
import Protected from './protected';
import Guest from './guest';

const Navbar = () => {
    const { user } = useAppSelector(state => state.authentications);

    return (
        <div>
            {user ? <Protected />  : <Guest />}
        </div>
    )
}

export default Navbar