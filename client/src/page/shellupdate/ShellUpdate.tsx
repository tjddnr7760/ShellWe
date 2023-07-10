import ShellCreate from '../shellcreate/ShellCreate.tsx';
import { useNavigate, useParams } from 'react-router-dom';

const ShellUpdate: React.FC = () => {
  const navigate = useNavigate();
  const { idx } = useParams();
  return (
    <>
      <ShellCreate />
    </>
  );
};

export default ShellUpdate;
