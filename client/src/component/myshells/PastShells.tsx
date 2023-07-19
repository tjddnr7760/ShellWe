import { useParams } from 'react-router';
import { usePastShells } from '../../hooks/myshells/usePastShells';
import MyShellsList from '../myshellspage-myshellslist/MyShellsList';

const PastShells = () => {
  const { id } = useParams<{ id: string }>();
  const memberId = id !== undefined ? +id : 0;
  const { data } = usePastShells(memberId);
  return <MyShellsList data={data} />;
};

export default PastShells;
