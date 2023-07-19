import React, { useState } from 'react';

const CheckboxExample = () => {
  const [a1, setA1] = useState('');
  const [d, setD] = useState('');
  const [n, setN] = useState('');
  const [resultado, setResultado] = useState(0);
  const [hide, setHide] = useState(false);
  const [opcion, setOpcion] = useState('');

  const handelCalcular = () => {
    if (opcion === 'diferencia') {
      let an = parseInt(a1) + (parseInt(n) - 1) * parseInt(d);
      let suma = (parseInt(n) / 2) * (parseInt(a1) + parseInt(an));
      console.log(suma);
      setResultado(suma);
    } else if (opcion === 'razon') {
      let sn = parseInt(a1) * ((1 - Math.pow(parseInt(d), parseInt(n))) / (1 - parseInt(d)));
      console.log(sn);
      setResultado(sn);
    }
  };

  const handleChange = (e) => {
    setOpcion(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Calculadora de progresiones aritméticas</h1>

      <div className="row">
        <div className="col-lg-6">
          <form>
            <div className="mb-3">
              <label htmlFor="a1" className="form-label">
                Número inicial
              </label>
              <input
                type="number"
                className="form-control"
                id="a1"
                placeholder="a1"
                value={a1}
                onChange={(e) => setA1(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="d" className="form-label">
                Diferencia/Razon
              </label>
              <input
                type="number"
                className="form-control"
                id="d"
                placeholder="d"
                value={d}
                onChange={(e) => setD(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="n" className="form-label">
                Número de elementos (n)
              </label>
              <input
                type="number"
                className="form-control"
                id="n"
                placeholder="n"
                value={n}
                onChange={(e) => setN(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  id="diferencia"
                  value="diferencia"
                  checked={opcion === 'diferencia'}
                  onChange={handleChange}
                />
                <label htmlFor="diferencia" className="form-check-label">
                  Diferencia
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  id="razon"
                  value="razon"
                  checked={opcion === 'razon'}
                  onChange={handleChange}
                />
                <label htmlFor="razon" className="form-check-label">
                  Razón
                </label>
              </div>
            </div>
            <button type="button" className="btn btn-primary" onClick={handelCalcular}>
              Calcular
            </button>
          </form>
        </div>
        <div className="col-lg-6">
          <h2 className="mt-4">Suma: {resultado}</h2>
        </div>
      </div>
    </div>
  );
};

export default CheckboxExample;
