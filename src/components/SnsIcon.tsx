import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    link: string;
    icon: any; 
}

const SnsIcon = ({ link, icon }: Props) => (
    <a href={link}>
        <FontAwesomeIcon icon={icon} />
    </a>
)

export default SnsIcon;