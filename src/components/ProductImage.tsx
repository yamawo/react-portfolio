import * as React from 'react';
import styled from 'styled-components';

interface Props {
    image: any;
}

const ProductImage = ({ image }: Props) => {
    if(image.match(/.jpg|.png/)) {
        return (
            <Box>
                <Image src={image} />
            </Box>
        )
    } else {
        return (
            <Box>
                <Movie src={image} controls />
            </Box>
        )    
    }
};

const Box = styled.div`
    margin: 0 auto;
    text-align: center;
`;

const Movie = styled.video`
    width: 60%;
    height: 200px;
`;

const Image = styled.img`
    width: 60%;
    height: 200px;
`; 

export default ProductImage;