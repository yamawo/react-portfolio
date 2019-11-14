import * as React from 'react';
import styled from 'styled-components';
import ProductImage from './ProductImage';
import ProductText from './ProductText';

const Item = (image, name ,text, link) => (
    <>
        <ItemBox>
            <ProductImage image={image} />
            <ProductText 
                name={name}
                text={text}
                link={link}
            />
        </ItemBox>
    </>
);

const ItemBox = styled.div`
    margin: 10px;
    padding-bottom: 10px;
    width: 200px;
    height: 200px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);
    background-color: #eaf4fc;
`;

export default Item;