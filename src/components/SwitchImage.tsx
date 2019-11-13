import * as React from 'react';
import styled from 'styled-components';

interface Props {
    mainIcon: string;
    subIcon: string;
}

const SwitchIcon = ({ mainIcon, subIcon }: Props) => {
    const [isHover, setIsHover] = React.useState<boolean>(false);

    return (
        <Image
        src={isHover ? subIcon : mainIcon}
        onMouseEnter={() => setIsHover(!isHover)}
        onMouseLeave={() => setIsHover(!isHover)}
        />
    )
};

const Image = styled.img`
    width: 100%;
    border-radius: 100%;
`;

export default SwitchIcon;
