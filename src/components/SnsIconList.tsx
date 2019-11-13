import styled from 'styled-components';

const SnsIconList = styled.div`
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    svg {
        font-size: 21px;
    }
    a {
        color: black;
        text-decoration: none;
        &:visited {
        color:black;
        }
    }
`;

export default SnsIconList;