import React, { useState } from 'react';
import './Calculator.css';

const Calculator = ({ onCalculate, onClear }) => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!weight || !height) return;
    onCalculate(parseFloat(weight.replace(',', '.')), parseFloat(height.replace(',', '.')));
  };

  const handleClear = (e) => {
    e.preventDefault();
    setHeight('');
    setWeight('');
    onClear();
  };

  return (
    <div className="container">
      <div id="calc-container">
        <h2>Calculadora de IMC</h2>
        <form id="imc-form" onSubmit={handleSubmit}>
          <div className="form-inputs">
            <div className="form-control">
              <label htmlFor="height">Altura:</label>
              <input
                type="text"
                name="height"
                id="height"
                placeholder="Exemplo 1,75"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label htmlFor="weight">Peso:</label>
              <input
                type="text"
                name="weight"
                id="weight"
                placeholder="Exemplo 70,5"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
          </div>
          <div className="action-control">
            <button id="calc-btn">Calcular</button>
            <button id="clear-btn" onClick={handleClear}>
              Limpar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Calculator;