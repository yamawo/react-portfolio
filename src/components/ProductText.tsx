import * as React from 'react';
import styled from 'styled-components';

interface Props {
    name: string;
    text: string;
    link: string;
}

const ProductText = ({ name, text, link }: Props) => (
    <Box>
        <Name>{name}</Name>
        <Text>
            {text}
        </Text>
        <Link href={link}>このアプリを見る</Link>
    </Box>
);

const Box = styled.div`
    border-top: dashed 3px 
    padding: 30px;
`;

const Name = styled.h3`
    font-family: 'Lato', 'Noto Sans JP', '游ゴシック Medium', '游ゴシック体', 'Yu Gothic Medium', YuGothic, 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
    font-size: 23px;
    color: black;
    padding-bottom: 15px;
    text-align: center;
`;

const Text = styled.p`
    width: 25em;
    font-size: 15px;
    color: black;
    padding-left: 15px; 
    padding-bottom: 40px;
    line-height: 26px;
`;

const Link = styled.a`
    fonyt-size: 15px;
    text-align: center;
    text-decoration: none;
    
`;

export default ProductText;
