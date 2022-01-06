import { Button } from 'antd';
import React, { useDebugValue } from 'react';

const UseCallbackExample = props => {
  const [count, setCount] = React.useState(0);
  const [countWithRef, setCountWithRef] = React.useState(0);
  const [countWithNoRef, setCountWithNoRef] = React.useState(0);

  const increaseRef = React.useCallback(() => {
    setCountWithRef(countWithRef + 1)
  }, [countWithRef]);

  const increaseNoRef = React.useCallback(() => {
    setCountWithNoRef(countWithNoRef + 1);
  }, []);

  const increase = () => {
    setCount(count + 1)
  }

  const decreaseRef = React.useCallback(() => {
    setCountWithRef(countWithRef - 1)
  }, [countWithRef]);

  const decreaseNoRef = React.useCallback(() => {
    setCountWithNoRef(countWithNoRef - 1);
  }, []);

  const decrease = () => {
    setCount(count - 1);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Đây là ví dụ về useCallback !</h3>
      <small>Trả về function đã được cache khi tham chiếu phụ thuộc không thay đổi</small>
      <p>
        Nào ta cùng đếm ~
      </p>
      <div>
        <p>Có sử dụng useCallback với tham chiếu truyền vào: <span style={{ fontWeight: 600 }}>{countWithRef}</span></p>
        <p>Có sử dụng useCallback với không có tham chiếu truyền vào: <span style={{ fontWeight: 600 }}>{countWithNoRef}</span></p>
        <p>Không sử dụng useCallback: <span style={{ fontWeight: 600 }}>{count}</span></p>
      </div>
      <div>
        <Button onClick={() => {
          increaseRef();
          increaseNoRef();
          increase();
        }}>
          Tăng
        </Button>
        <Button onClick={() => {
          decreaseRef();
          decreaseNoRef();
          decrease();
        }}>
          Giảm
        </Button>
      </div>
    </div>
  );
};

export default UseCallbackExample;