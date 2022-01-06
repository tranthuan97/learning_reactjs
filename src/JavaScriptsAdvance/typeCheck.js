import { Button } from 'antd';
import React from 'react';

const key = ['array', 'object', 'string', 'date', 'number', 'function', 'regexp', 'boolean', 'null', 'undefined'];

const data = {
  [key[0]]: [],
  [key[1]]: {},
  [key[2]]: 'string',
  [key[3]]: new Date(),
  [key[4]]: 1,
  [key[5]]: () => { },
  [key[6]]: /test/i,
  [key[7]]: true,
  [key[8]]: null,
  [key[9]]: undefined,
}

const TypeCheck = props => {
  const [typeOfCheck, setTypeOfCheck] = React.useState({
    name: null,
    isSet: false,
  });
  const [prototypeCheck, setTPrototypeCheck] = React.useState({
    name: null,
    isSet: false,
  });

  const typeOf_Render = () => {
    return (
      <div>
        <p><b>Cách 1: </b>Kiểm tra theo <b>typeof</b>:</p>
        <div>
          {key.map((item) => {
            return <Button className='mr-1' onClick={() => setTypeOfCheck({ name: data[item], isSet: true })} key={item}>{item}</Button>
          })}
        </div>
        <p>Đây là kiểu được kiểm tra theo <b>{`typeof <${!typeOfCheck.isSet ? 'name' : typeOfCheck.name}>`}</b> : {
          typeOfCheck.isSet ?
            <span style={{ color: 'green' }}>{typeof typeOfCheck.name}</span> :
            <span style={{ color: 'red' }}>{`<Lựa chọn kiểu dữ liệu>`}</span>
        }</p>
      </div>
    )
  }
  const object_Prototype_ToString_Call_Render = () => {
    return (
      <div>
        <p><b>Cách 2: </b>Kiểm tra theo <b>Object.prototype.toString.call</b>:</p>
        <div>
          {key.map((item) => {
            return <Button className='mr-1' onClick={() => setTPrototypeCheck({ name: data[item], isSet: true })} key={item}>{item}</Button>
          })}
        </div>
        <p>Đây là kiểu được kiểm tra theo <b>{`Object.prototype.toString.call(${!prototypeCheck.isSet ? 'name' : prototypeCheck.name})`}</b> : {
          prototypeCheck.isSet ?
            <span style={{ color: 'green' }}>{Object.prototype.toString.call(prototypeCheck.name)}</span> :
            <span style={{ color: 'red' }}>{`<Lựa chọn kiểu dữ liệu>`}</span>
        }</p>
      </div>
    )
  }

  return (
    <div className='mx-5 mt-5'>
      <h1 className='text-center'>Kiểm tra kiểu dữ liệu</h1>
      <p>Trong Javascript định nghĩa 7 data type như sau:</p>
      <p>- <b>6 primitive types (kiểu dữ liệu nguyên thủy)</b>: Boolean, Null, Undefined, Number, String, Symbol</p>
      <p>- <b>Object</b></p>
      <hr />
      <q><b><i>Mọi thứ trong Javascript đều là Object. Boolean, Null, Undefined, Number, String, Symbol đều là Object?</i></b></q>
      <hr />
      {typeOf_Render()}
      <hr />
      {object_Prototype_ToString_Call_Render()}
      <hr />
      <p><b>Cách 3: </b>Có thể sử dụng thư viện <b>lodash</b> hoặc <b>Axis</b> để kiểm tra kiểu dữ liệu như cách 2</p>
    </div>
  );
};

TypeCheck.propTypes = {

};

export default TypeCheck;