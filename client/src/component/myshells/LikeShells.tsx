import { useParams } from 'react-router';
import { useLikeShells } from '../../hooks/myshells/useLikeShells';
import MyShellList from '../offermodal-myshelllist/MyShellList';

const LikeShells = () => {
  const { id } = useParams<{ id: string }>();
  const memberId = id !== undefined ? +id : 0;
  const { data } = useLikeShells(memberId);
  return <MyShellList data={data} />;
};

export default LikeShells;
