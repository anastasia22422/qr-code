import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './main.css';

export const QrCodeGenerator = () => {
  const [value, setValue] = useState('Hello');
  const [result, setResult] = useState('');

  const onClickHandler = (event) => {
    setResult(value);
    setValue('');
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    setResult('');
  };

  return (
    <div className='container'>
      {result !== '' && (
        <QRCodeSVG className='qrcode' value={result} />
      )}

      <input className='input' type="text" value={value} onChange={onChangeHandler}/>
      <button className='button' type="button" onClick={onClickHandler}>Generate QR</button>
    </div>
  );
}