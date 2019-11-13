import * as React from 'react';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import TopContainer from './containers/TopContainer';

const App = () => {
    <Wrapper>
        <Reset />
        <TopContainer />
    </Wrapper>
};

const Wrapper = styled.div`
    overflow: hidden;
`;

export default App;
