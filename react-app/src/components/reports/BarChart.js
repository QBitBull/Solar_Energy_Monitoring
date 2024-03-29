import React, {useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        }
    },
};

export function BarChart(props) {

    const [labels,setLabels] = useState(['January', 'February', 'March', 'April', 'May', 'June', 'July']);

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [1,2,3,4,5,6,7],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };

    return <Bar options={options} data={props.data} />;
}
