import * as React from 'react';
import styled from 'styled-components';
import CardPlate from './CardPlate';
import ProfileCardFront from './ProfileCardFront';
import ProfileCardBack from './ProfileCardBack';


const ProfileCard = () => {
    const [isTurn, setIsTurn] = React.useState(false);

    return (
        <Wrapper>
            <CardPlate>
                {   isTurn ?
                    <ProfileCardBack onTurn={() => setIsTurn(!isTurn)} /> :
                    <ProfileCardFront onTurn={() => setIsTurn(!isTurn)} />
                }
            </CardPlate>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    display: flexbox;
    box-sizing: border-box;
`;

export default ProfileCard;