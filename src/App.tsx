import * as React from 'react';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import TopContainer from './containers/TopContainer';
import BottomContainer from './containers/BottomContainer';

const App = () => (
    <Wrapper>
        <Reset />
        <TopContainer />
        <BottomContainer />
    </Wrapper>
);

const Wrapper = styled.div`
    overflow: hidden;
`;

export default App;
