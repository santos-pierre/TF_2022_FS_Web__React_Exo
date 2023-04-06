import { useId } from "react";
import { useState } from "react";
import { operatorEnum } from "../../enums/operator.enum";

const regexNumber = /^[0-9]+((\.|,)[0-9]*)?$/;

const Calculatrice = () => {
  // Id pour les elements du DOM
  const id = useId();

  // Les states pour le formulaire 
  const [nb1, setNb1] = useState('');
  const [nb2, setNb2] = useState('');
  const [op, setOp] = useState(operatorEnum.multi);
  const [result, setResult] = useState('');

  /**
   * Fonction pour gérer les inputs de type number
   * @param {string} value La valeur d'une input
   * @param {(value : string) => {}} setTony Le mutateur d'un state
   */
  const handleNumberInput = (value, setTony) => {
    if(value === '' || regexNumber.test(value)) {
      setTony(value.replace(',', '.'));
    }
  }

  // La méthode submit du formulaire
  const handleCalc = (e) => {
    e.preventDefault();

    const v1 = parseFloat(nb1);
    const v2 = parseFloat(nb2);

    if(isNaN(v1) || isNaN(v2)) {
      setResult('Erreur... :o');
    }
    else if(op === operatorEnum.plus) {
      setResult((v1 + v2).toFixed(2));
    }
    else if(op === operatorEnum.minus) {
      setResult((v1 - v2).toFixed(2));
    }
    else if(op === operatorEnum.div) {
      if(v2 === 0) {
        setResult('Division par zero !')
      }
      else {
        setResult((v1 / v2).toFixed(2));
      }
    }
    else if(op === operatorEnum.multi) {
      setResult((v1 * v2).toFixed(2));
    }
  } 

  return (
    <form onSubmit={handleCalc}>
      <div>
        <label htmlFor={id+'nb1'}>Nombre 1</label>
        <input type="number" id={id+'nb1'} 
          value={nb1} onChange={e => handleNumberInput(e.target.value, setNb1)}/>
      </div>
      <div>
        <label htmlFor={id+'op'}>Operateur</label>
        <select id={id+'op'}
              value={op} onChange={e => setOp(e.target.value)}>
          <option value={operatorEnum.plus}>+</option>
          <option value={operatorEnum.minus}>-</option>
          <option value={operatorEnum.multi}>x</option>
          <option value={operatorEnum.div}>/</option>
        </select>
      </div>
      <div>
        <label htmlFor={id+'nb2'}>Nombre 2</label>
        <input type="text" id={id+'nb2'}
          value={nb2} onChange={e => handleNumberInput(e.target.value, setNb2)}/>
      </div>
      <button>Calculer</button>
      <div>
        <label htmlFor={id+'res'}>Resultat</label>
        <input id={id+'res'} type="text"
          value={result} readOnly />
      </div>
    </form>
  );
};

export default Calculatrice;