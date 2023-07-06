import { Lift } from './LiftBtn.styled';

const LiftBtn = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <Lift src={'/lift.svg'} alt="LiftBtn" onClick={handleScrollToTop} />
    </>
  );
};

export default LiftBtn;
