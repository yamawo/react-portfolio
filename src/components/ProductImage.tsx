import * as React from 'react';
import styled from 'styled-components';

interface Props {
    image: any;
}

const ProductImage = ({ image }: Props) => (
    <Image src={image} />
);

const Image = styled.img`
    width: 100%;
`; 

export default ProductImage;