import { useState, useEffect } from 'react'
import { useLocation, useParams, useRouteMatch, Switch, Route, Link } from "react-router-dom";
import { useQuery } from 'react-query';
import styled from 'styled-components';
import Chart from './Chart';
import Price from './Price';
import { fetchCoinInfo, fetchCoinTickers } from '../api';

interface RouteParams {
    coinId: string;
}

interface RouteState {
    name: string;
}

interface InfoData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    logo: string;
    tags: object;
    team: object;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;
}

interface TickersData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD: {
            price: number;
            volume_24h: number;
            volume_24h_change_24h: number;
            market_cap: number;
            market_cap_change_24h: number;
            percent_change_15m: number;
            percent_change_30m: number;
            percent_change_1h: number;
            percent_change_6h: number;
            percent_change_12h: number;
            percent_change_24h: number;
            percent_change_7d: number;
            percent_change_30d: number;
            percent_change_1y: number;
            ath_price: number;
            ath_date: string;
            percent_from_price_ath: number;
        }
    };
}

function Coin() {
    const { coinId } = useParams<RouteParams>();
    const { state } = useLocation<RouteState>();
    const priceMatch = useRouteMatch("/:coinId/price");
    const chartMatch = useRouteMatch("/:coinId/chart");
    const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
        ['info', coinId], () => fetchCoinInfo(coinId)
    );
    const { isLoading: tickersLoading, data: tickersData } = useQuery<TickersData>(
        ['tickers', coinId], () => fetchCoinTickers(coinId)
    );
    const loading = infoLoading || tickersLoading;
    
    /*const [loading, setLoading] = useState(true);
    const [info, setInfo] = useState<InfoData>();
    const [price, setPrice] = useState<PriceData>();
    useEffect(() => {
        (async () => {
            const infoData = await 
                (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`))
            .json();
            const priceDate = await
                (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`))
            .json();
            setInfo(infoData);
            setPrice(priceDate);
            setLoading(false);
        })();
    }, [coinId]);*/

    return (
        <Container>
            <Header>
                <Title>{state?.name ? state.name : loading ? "Loading..." : infoData?.name}</Title>
            </Header>
            {loading ? (
                <Loader>Loading...</Loader>
            ) : (
                <>
                    <Overview>
                        <OverviewItem>
                            <span>Rank:</span>
                            <span>{infoData?.rank}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Symbol:</span>
                            <span>${infoData?.symbol}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Open Source:</span>
                            <span>{infoData?.open_source ? "Yes" : "No"}</span>
                        </OverviewItem>
                    </Overview>
                    <Description>{infoData?.description}</Description>
                    <Overview>
                        <OverviewItem>
                            <span>Total Suply:</span>
                            <span>{tickersData?.total_supply}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Max Supply:</span>
                            <span>{tickersData?.max_supply}</span>
                        </OverviewItem>
                    </Overview>
                    <Tabs>
                        <Tab isActive={chartMatch !== null}>
                            <Link to={`/${coinId}/chart`}>Chart</Link>
                        </Tab>
                        <Tab isActive={priceMatch !== null}>
                            <Link to={`/${coinId}/price`}>Price</Link>
                        </Tab>
                    </Tabs>
                    <Switch>
                        <Route path="/:coinId/price">
                            <Price />
                        </Route>
                        <Route path="/:coinId/chart">
                            <Chart coinId={coinId}/>
                        </Route>
                    </Switch>
                </>
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
    font-size: 36px;
    color: ${p => p.theme.accentColor};
`;

const Loader = styled.span`
    text-align: center;
    display: block;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 25px 0px;
    gap: 10px;
`

const Tab = styled.span<{ isActive: boolean}>`
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 900;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 7px 0px;
    border-radius: 10px;
    color: ${p => p.isActive ? p.theme.accentColor : p.theme.textColor};
    a {
        display: block;
    }
`

export default Coin;