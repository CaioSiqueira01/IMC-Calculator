import React from 'react';
import Table from '../Table/Table.jsx';

const Result = ({ imc, info, onBack }) => {
  const getClassByInfo = () => {
    switch (info) {
      case 'Magreza':
        return 'low';
      case 'Normal':
        return 'good';
      case 'Sobrepeso':
        return 'low';
      case 'Obesidade':
        return 'medium';
      case 'Obesidade grave':
        return 'high';
      default:
        return '';
    }
  };

  return (
    <div className="container">
      <div id="result-container" className="">
        <p id="imc-number">
          Seu IMC: <span className={getClassByInfo()}>{imc}</span>
        </p>
        <p id="imc-info">
          Situação atual: <span className={getClassByInfo()}>{info}</span>
        </p>
        <h3>Confira as classificações:</h3>
        <Table />
        <button id="back-btn" onClick={onBack}>
          Voltar
        </button>
      </div>
    </div>
  );
};

export default Result;