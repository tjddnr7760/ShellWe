import { ToggleBody, ToggleRetangle } from './DetailPageSidebar.styled';

interface ToggleProps {
  toggleOn: boolean;
  handleClick: () => void;
}

const Toggle = ({ toggleOn, handleClick }: ToggleProps) => {
  return (
    <div>
      <ToggleBody
        className={`${toggleOn && 'toggle-checked'}`}
        onClick={handleClick}
      >
        <ToggleRetangle className={`${toggleOn && 'toggle-checked'}`} />
      </ToggleBody>
    </div>
  );
};

export default Toggle;
