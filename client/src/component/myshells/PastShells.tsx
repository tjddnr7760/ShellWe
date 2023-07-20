import { useParams } from 'react-router';
import { usePastShells } from '../../hooks/myshells/usePastShells';
import MyShellsList from '../myshellspage-myshellslist/MyShellsList';
import { MyShellTabProps } from '../../dataset/TypeOfMyShells';

const PastShells = ({ selectedTab }: MyShellTabProps) => {
  const { id } = useParams<{ id: string }>();
  const memberId = id !== undefined ? +id : 0;
  const { data } = usePastShells(memberId);
  return <MyShellsList data={data} selectedTab={selectedTab} />;
};

export default PastShells;
