import React, { useState } from 'react';
import Calculator from './components/Calculator/Calculator.jsx';
import Result from './components/Result/Result.jsx';
import './App.css';

const App = () => {
  const [showResult, setShowResult] = useState(false);
  const [imc, setImc] = useState('');
  const [info, setInfo] = useState('');

  const handleCalculate = (weight, height) => {
    const calculatedImc = (weight / (height * height)).toFixed(1);
    setImc(calculatedImc);
    setInfo(getClassification(calculatedImc));
    setShowResult(true);
  };

  const handleClear = () => {
    setShowResult(false);
    setImc('');
    setInfo('');
  };

  const handleBack = () => {
    setShowResult(false);
  };

  const getClassification = (calculatedImc) => {
    const data = [
      { min: 0, max: 18.4, classification: 'Menor que 18,5', info: 'Magreza', obesity: '0' },
      { min: 18.5, max: 24.9, classification: 'Entre 18,5 e 24,9', info: 'Normal', obesity: '0' },
      { min: 25, max: 29.9, classification: 'Entre 25,0 e 29,9', info: 'Sobrepeso', obesity: 'I' },
      { min: 30, max: 39.9, classification: 'Entre 30,0 e 39,9', info: 'Obesidade', obesity: 'II' },
      { min: 40, max: 99, classification: 'Maior que 40,0', info: 'Obesidade grave', obesity: 'III' },
    ];

    for (let i = 0; i < data.length; i++) {
      if (calculatedImc >= data[i].min && calculatedImc <= data[i].max) {
        return data[i].info;
      }
    }
    return '';
  };

  return (
    <div className="container">
      {!showResult && <Calculator onCalculate={handleCalculate} onClear={handleClear} />}
      {showResult && <Result imc={imc} info={info} onBack={handleBack} />}
    </div>
  );
};

export default App;