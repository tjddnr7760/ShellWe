import styled from 'styled-components';
import { CircularProgress } from '@mui/material';
import { CenteredWrapper } from './Loading.styled.ts';
const loading = () => (
  <CenteredWrapper>
    <CircularProgress />
  </CenteredWrapper>
);

export default loading;
