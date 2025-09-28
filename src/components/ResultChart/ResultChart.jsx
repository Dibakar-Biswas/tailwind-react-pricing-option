import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
  {
    "id": 1,
    "name": "Luiz Inácio Lula da Silva",
    "chemistry": 72,
    "math": 85
  },
  {
    "id": 2,
    "name": "Mikhail Mishustin",
    "physics": 88,
    "chemistry": 91,
    "math": 79
  },
  {
    "id": 3,
    "name": "Vladimir Putin",
    "physics": 95,
    "chemistry": 84,
    "math": 92
  },
  {
    "id": 4,
    "name": "Narendra Modi",
    "physics": 67,
    "chemistry": 74,
    "math": 74
  },
  {
    "id": 5,
    "name": "Droupadi Murmu",
    "physics": 73,
    "chemistry": 65,
    "math": 80
  },
  {
    "id": 6,
    "name": "Xi Jinping",
    "physics": 89,
    "chemistry": 90,
    "math": 85
  },
  {
    "id": 7,
    "name": "Li Qiang",
    "physics": 56,
    "chemistry": 61,
    "math": 63
  },
  {
    "id": 8,
    "name": "Cyril Ramaphosa",
    "physics": 97,
    "chemistry": 93,
    "math": 95
  },
  {
    "id": 9,
    "name": "Paul Mashatile",
    "physics": 82,
    "chemistry": 76,
    "math": 88
  },
  {
    "id": 10,
    "name": "Geraldo Alckmin",
    "physics": 71,
    "chemistry": 79,
    "math": 74
  }
]


const ResultChart = () => {
    return (
        <div>
            <LineChart width={1500} height={500} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey="chemistry" stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;