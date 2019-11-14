import * as React from 'react';
import styled from 'styled-components';
import Item from '../components/Item';

const BottomContainer: React.FC = () => {
    const productList = [
        {
            image: "images/noimage.jpg",
            name: "Coin_trade_app",
            text: "BitCoinのリアルタイムチャートを使ったデモトレードアプリです。Rails側で定期的に外部APIからデータを取得させて、JavaScriptでグラフ化しています。擬似取引も行うことができます。(※Crontabを使用しているため、デプロイは行っておりません)",
            link: "https://github.com/yamawo/trade_app",
        },
        {   
            image: "images/mercari.png",
            name: "メルカリコピーサイト（チーム開発）",
            text: "5人で「メルカリ」のコピーサイトを作りました。（Basic認証 ID: makonari Pass: 7777）(購入者用アカウント メールアドレス: buyer@gmail.com Pass: 12345678) ※クリックできない等不具合ございましたらリロードをお試しください",
            link: "http://52.197.24.16/",
        },
        {
            image: "images/noimage.jpg",
            name: "個人アプリ開発中！",
            text: "次の個人アプリも開発中です！しばらくお待ちください。",
            link: "none",
        },
    ];

    return (
        <Top>
            {productList.map((productItem) => {
                return (
                    <Item
                        image={productItem.image}
                        name={productItem.name}
                        text={productItem.text}
                        link={productItem.link}
                    />
                );
            })}
        </Top>
    );
};

const Top = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #19448e;
`;

export default BottomContainer;