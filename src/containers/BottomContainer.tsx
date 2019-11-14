import * as React from 'react';
import styled from 'styled-components';
import Item from '../components/Item';

const BottomContainer: React.FC = () => {
    const productList = [
        {
            image: "",
            name: "Coin_trade_app",
            text: "BitCoinのリアルタイムチャートを使ったデモトレードアプリです。Rails側で定期的に外部APIからデータを取得させて、JavaScriptでグラフ化しています。擬似取引も行うことができます。(※Crontabを使用しているため、デプロイは行っておりません)"
            link: "https://github.com/yamawo/trade_app"
        },
        {   
            image: 
        },
        {

        },
    ];

    return (
        <Top>
            <Item />
        </Top>
    )
};

const Top = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #19448e;
`;

export default BottomContainer;