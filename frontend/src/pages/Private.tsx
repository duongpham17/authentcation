import { useAppSelector } from '@redux/hooks/useRedux';
import Unknown from 'pages/unknown';

interface Props {
    roles?: string[],
    component: React.FunctionComponent
}

const Private = ({component: Component, roles=["user", "admin"]}: Props) => {

  const {user} = useAppSelector(state => state.authentications);

  const auth_good = user && roles.includes(user?.role || "user");

  const auth_bad = !user || !roles.includes(user?.role || "user");

  if (auth_good) return <Component/>
  
  if (auth_bad) return <Unknown />
  
  return <div className='loading' />
}

export default Private