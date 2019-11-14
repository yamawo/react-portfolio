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
    font-family: Quicksand, 游ゴシック体, "Yu Gothic", YuGothic, "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
`;

export default App;
