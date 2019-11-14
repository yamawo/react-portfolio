import * as React from 'react';
import styled from 'styled-components';
import Item from '../components/Item';

const BottomContainer: React.FC = () => (
    <Top>
        <Item />
        <Item />
        <Item />
    </Top>
);

const Top = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #19448e;
`;

export default BottomContainer;