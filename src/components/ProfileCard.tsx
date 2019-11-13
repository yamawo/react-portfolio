import * as React from 'react';
import styled from 'styled-components';
import CardPlate from './CardPlate';
// front
// back


const ProfileCard = () => {

    return (
        <Wrapper>
            <CardPlate>
                
            </CardPlate>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flexbox;
    box-sizing: border-box;
`;

export default ProfileCard;