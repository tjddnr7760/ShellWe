import { useParams } from 'react-router';
import { useLikeShells } from '../../hooks/myshells/useLikeShells';
import MyShellsList from '../myshellspage-myshellslist/MyShellsList';
import { MyShellTabProps } from '../../dataset/TypeOfMyShells';

const LikeShells = ({ selectedTab }: MyShellTabProps) => {
  const { id } = useParams<{ id: string }>();
  const memberId = id !== undefined ? +id : 0;
  const { data } = useLikeShells(memberId);
  return <MyShellsList data={data} selectedTab={selectedTab} />;
};

export default LikeShells;
