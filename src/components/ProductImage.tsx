import * as React from 'react';
import styled from 'styled-components';

interface Props {
    image: any;
}

const ProductImage = ({ image }: Props) => (
    <Box>
        <Image src={image} />
    </Box>
);

const Box = styled.div`
    margin: 0 auto;
    text-align: center;
`;

const Image = styled.img`
    width: 60%;
    height: 200px;
`; 

export default ProductImage;