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
    color: #19448e;
    padding: 12px 24px;
    font-weight: 500;
    border: solid 1px #19448e;
    border-radius: 3px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
        color: #ffffff;
        background-color: #19448e;
    }
`;

export default Button;