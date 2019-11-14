import * as React from 'react';
import styled from 'styled-components';
import Button from './Button';

interface Props {
    onTurn: () => void;
}

const ProfileCardBack = ({ onTurn }: Props) => (
    <>
        <DetailBox>
            <Detail>
                <Title>フロント</Title>
                <p>HTML, haml, CSS, Scss, JavaScript, jQuery, TypeScript, React, Vue.js, BEM</p>
            </Detail>
            <Detail>
                <Title>バックエンドスキル他</Title>
                <p>Ruby, RubyonRails, MySQL, AWS（EC2/S3）<br />, Git</p>
            </Detail>
        </DetailBox>
        <DetailBox>
            <Detail>
                <Title>趣味</Title>
                <p>海外サッカー観戦・分析,  ゲーム,  読書</p>
            </Detail>
            <Detail>
                <Title>特技</Title>
                <p>剣道, 電気制御回路図作成, AutoCAD</p>
            </Detail>
            <Button onClick={onTurn}>表へ戻る</Button>
        </DetailBox>
    </>
);

const DetailBox = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
`;

const Detail = styled.div`
    width: 100%;
    height: 35%;
`;

const Title = styled.h3`
    margin: 12px 0;
    font-size: 1.4em;
    font-weight: bold;
`;

export default ProfileCardBack;
