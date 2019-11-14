import * as React from 'react';
import styled from 'styled-components';
import ProfileCard from '../components/ProfileCard';

const TopContainer: React.FC = () => (
    <Top>
        <ProfileCard />
    </Top>
);

const Top = styled.div`
    width: 100vw;
    height: 90vh;
    padding-top: 10%;
    padding-bottom: 10%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    background-color: #fef4f4;
`;

export default TopContainer;