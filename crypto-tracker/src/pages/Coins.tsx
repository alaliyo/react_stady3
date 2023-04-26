import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { fetchCoins } from '../api';
import { isDarkAtom } from '../atoms';

interface ICoin {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}

interface ICoinsProps {
}

function Coins() {
    const isDark = useRecoilValue(isDarkAtom);
    const setterFn = useSetRecoilState(isDarkAtom);
    // react-query로 api get
    const { isLoading, data } = useQuery<ICoin[]>('allCoins', fetchCoins);

    return (
        <Container>
            <Header>
                <Title>Coins</Title>
                <button onClick={() => setterFn(e => !e)}>
                    {isDark ? '화이트' : '다크' }
                </button>
            </Header>
            {isLoading ? <Loader>Loading...</Loader> : (
                <CoinsList>
                {data?.slice(0, 100).map(coin => (
                    <Coin key={coin.id}>
                        <Link to={{
                            pathname: `/${coin.id}`,
                            state: { name: coin.name },
                        }}>
                            <IconImg src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
                            {coin.name} &rarr;
                        </Link>
                    </Coin>))}
                </CoinsList>
            )}
        </Container>
    );
}

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;

const Title = styled.h1`
    font-size: 48px;
    color: ${p => p.theme.accentColor};
`;

const CoinsList = styled.ul`
    
`;

const Coin = styled.li`
    background-color: ${p => p.theme.btnColor};
    font-size: 20px;
    font-weight: 900;
    border-radius: 15px;
    margin-bottom: 10px;
    a {
        color: ${p => p.theme.bgColor};
        display: flex;
        align-items: center;
        padding: 20px;
        transition: .3s;
    }
    &:hover {
        a {
            color: ${p => p.theme.accentColor};
        }
    }
`;

const IconImg = styled.img`
    width: 25px;
    height: 25px;
    margin-right: 10px;
`

const Loader = styled.span`
    text-align: center;
    display: block;
`;

export default Coins;