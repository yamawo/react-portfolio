import * as React from 'react';
import styled from 'styled-components';
import SwitchImage from './SwitchImage';
import SnsIconList from './SnsIconList';
import {
    faGithub,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';
import SnsIcon from './SnsIcon';
import Button from './Button';
const icon = 'images/icon.jpg';          // public以下を探してくれる
const icon2 = 'images/icon2.jpg';

interface Props {
    onTurn: () => void;
}

const ProfileCardFront = ({ onTurn }: Props) => (
    <>
        <Left>
            <IconBox>
                <SwitchImage mainIcon={icon} subIcon={icon2} />
                <SnsIconList>
                    <>
                        <SnsIcon link="https://github.com/yamawo" icon={faGithub} />
                    </>
                </SnsIconList>
            </IconBox>
            <SubInfo>
                <Small>y7a3m1asaki@gmail.com</Small>
            </SubInfo>
        </Left>
        <Right>
            <>
                <Name>山﨑 翔太</Name>
                <Small>Shota Yamasaki</Small>
            </>
            <ProfileBox>
                論理的に思考するようにしていたら、プログラミングを始めてました。<br />
            </ProfileBox>
            <Button onClick={onTurn}>裏面へ</Button>
        </Right>
    </>

);

const Left = styled.div`
    position: relative;
    width: 30%;
    height: 100%;
`;

const Right = styled.div`
    position: relative;
    width: 70%;
    height: 100%;
    padding-top: 20px;
    padding-left: 15%;
    box-sizing: border-box;
`;

const IconBox = styled.div`
    width: 100%;
`;

const ProfileBox = styled.div`
    margin-top: 20%;
`;

const SubInfo = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
`;

const Small = styled.p`
    font-size: 1.0em;
`;

const Name = styled.h1`
    font-size: 2.4em;
    margin: 8px 0;
`;

export default ProfileCardFront;