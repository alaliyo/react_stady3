import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from 'react-apexcharts';

interface CharProps {
    coinId: string
}

interface IHistorical {
    time_open: number;
    time_close: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    market_cap: number;
}

function Chart({coinId}: CharProps) {
    const {isLoading, data} = useQuery<IHistorical[]>(['ohlcv', coinId], () => 
        fetchCoinHistory(coinId)
    );

    return(
        <div>
            {isLoading ? (
                '...Loading'
            ) : (
                <ApexChart
                    type="line"
                    series={[
                        {
                            name: "sales",
                            data: data?.map(p => Number(p.close)) as number[],
                        },
                    ]}
                    options={{
                        theme: {
                            mode: "dark",
                        },
                        chart: {
                            height: 500,
                            width: 500,
                        },
                        stroke: {
                            curve: 'smooth',
                            width: 4,
                        },
                }} />
            )}
        </div>
    );
}

export default Chart;