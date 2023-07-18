import { useParams } from 'react-router';
import { usePastShells } from '../../hooks/myshells/usePastShells';
import MyShellList from '../offermodal-myshelllist/MyShellList';

const PastShells = () => {
  const { id } = useParams<{ id: string }>();
  const memberId = id !== undefined ? +id : 0;
  const { data } = usePastShells(memberId);
  return <MyShellList data={data} />;
};

export default PastShells;
