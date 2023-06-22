import React from 'react';
import './Table.css';

const Table = () => {
  const data = [
    {
      min: 0,
      max: 18.4,
      classification: 'Menor que 18,5',
      info: 'Magreza',
      obesity: '0',
    },
    {
      min: 18.5,
      max: 24.9,
      classification: 'Entre 18,5 e 24,9',
      info: 'Normal',
      obesity: '0',
    },
    {
      min: 25,
      max: 29.9,
      classification: 'Entre 25,0 e 29,9',
      info: 'Sobrepeso',
      obesity: 'I',
    },
    {
      min: 30,
      max: 39.9,
      classification: 'Entre 30,0 e 39,9',
      info: 'Obesidade',
      obesity: 'II',
    },
    {
      min: 40,
      max: 99,
      classification: 'Maior que 40,0',
      info: 'Obesidade grave',
      obesity: 'III',
    },
  ];

  return (
    <div id="imc-table">
      <div className="table-header">
        <h4>IMC</h4>
        <h4>Classificação</h4>
        <h4>Obesidade</h4>
      </div>
      {data.map((item, index) => (
        <div className="table-data" key={index}>
          <p>{item.classification}</p>
          <p>{item.info}</p>
          <p>{item.obesity}</p>
        </div>
      ))}
    </div>
  );
};

export default Table;