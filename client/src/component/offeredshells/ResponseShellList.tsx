import styled from 'styled-components';
import ResponseShell from "./ResponseShell";

const ResponseShellListWrapper = styled.div`
max-height: 540px;
overflow-y: scroll;
`;

const ResponseShellList = () => {
    return (
      <ResponseShellListWrapper>
        <ResponseShell />
        <ResponseShell />
        <ResponseShell />
        <ResponseShell />
        <ResponseShell />
      </ResponseShellListWrapper>
    );
}

export default ResponseShellList;