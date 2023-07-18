import { useParams } from 'react-router';
import { useCurrentShells } from '../../hooks/myshells/useCurrentShells';
import MyShellList from '../offermodal-myshelllist/MyShellList';

const CurrentShells = () => {
  const { id } = useParams<{ id: string }>();
  const memberId = id !== undefined ? +id : 0;
  const { data } = useCurrentShells(memberId);
  return <MyShellList data={data} />;
};

export default CurrentShells;
