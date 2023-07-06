import styled from 'styled-components';
import { DropdownBTN } from '../dropdownmenu/DropDownMenu.styled';

export const Lift = styled(DropdownBTN)`
  box-shadow: none;
  position: absolute;
  bottom: 5%;
  right: 5%;
  cursor: pointer;

  &:active {
    background-color: #0077b6;
  }
`;
