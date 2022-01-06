import React, { useMemo } from 'react';
import { Button, Input, Result } from 'antd';
import RenderResult from './RenderResult';

const UseMemoExample = props => {

  const [number, setNumber] = React.useState({
    a: 0,
    b: 0,
    result: 0
  })

  const calculator = (numberA, numberB) => {
    console.log('clicked')
    return setNumber(pre => ({ ...pre, result: numberA + numberB }))
  }

  //cache giá trị trả về khi biến sử dụng bên trong không đổi
  const memiziedResult = useMemo(() => {
    console.log(1)
    return number.result
  }, [number.result])

  const flatten = (array, shallow) => {
    const arr = [];
    array.forEach(e => {
      if (Array.isArray(e)) {
        shallow ? arr.push(...e) : arr.push(...flatten(e));
      } else {
        arr.push(e);
      }
    });
    return arr;
  }

  const arr = [1, [2], [3, [[4]]]];
  const shallow = flatten(arr, true);
  const deep = flatten(arr);
  console.log("🚀 ~ file: index.js ~ line 38 ~ shallow", JSON.stringify(shallow))
  console.log("🚀 ~ file: index.js ~ line 39 ~ deep", JSON.stringify(deep))
  console.log("🚀 ~ file: index.js ~ line 39 ~ flat", JSON.stringify(arr.flat()))
  const obj = { a: 1, b: 2, c: 3 };
  for (const iterator in obj) {
  console.log("🚀 ~ file: index.js ~ line 44 ~ iterator", iterator)
    
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Đây là ví dụ về useMemo !</h3>
      <small>Trả về giá trị đã được cache khi tham chiếu phụ thuộc không thay đổi</small>
      <p>
        Học toán cùng tớ nào ~
      </p>
      <div>
        Số A cộng với số B: <RenderResult result={memiziedResult} />
      </div>
      <div className="d-flex justify-content-center my-2">
        <div>
          Number A: <Input type="number" onChange={(e) => setNumber(pre => ({ ...pre, a: parseInt(e.target.value) }))} />
        </div>
        <div>
          Number B: <Input type="number" onChange={(e) => setNumber(pre => ({ ...pre, b: parseInt(e.target.value) }))} />
        </div>
      </div>
      <Button onClick={() => calculator(number.a, number.b)}>Tính toán</Button>
    </div>
  );
};

export default UseMemoExample;