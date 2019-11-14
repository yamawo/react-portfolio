import * as React from 'react';
import styled from 'styled-components';

interface Props {
    children: string;
    onClick: () => void;
}

const Button = ({ children, onClick }: Props) => (
    <Wrapper onClick={onClick}>
        <Label>{children}</Label>
    </Wrapper>
);

const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
`;

const Label = styled.span`
    color: black;
    padding: 12px 24px;
    font-weight: 500;
    border: solid 1px black;
    border-radius: 3px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
        color: black;
        background-color: #fef4f4;
    }
`;

export default Button;