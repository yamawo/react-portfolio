import * as React from 'react';
import styled from 'styled-components';

interface Props {
    name: string;
    text: string;
    link: string;
}

const ProductText = ({ name, text, link }: Props) => (
    <>
        <Name>{name}</Name>
        <Text>
            {text}
        </Text>
        <Link>{link}</Link>
    </>
);

const Name = styled.h4`
    font-size: 25px;
    color: black;
    text-align: center;
    font-weight: bold;
`;

const Text = styled.p`
    font-size: 15px;
    color: black;
    text-align: center;
`;

const Link = styled.a`
    fonyt-size: 15px;
    text-align: center;
`;

export default ProductText;
