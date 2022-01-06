import React from 'react';
import PropTypes from 'prop-types';

const Closure = props => {

  const createCouter = () => {
    // biến được khai báo trong hàm
    let counter = 0;

    // hàm trả về
    const increase = () => {
      return counter++;
    }
    return increase;
  }

  // tham chiếu đến hàm bên trong có sử dụng biến khai báo
  const func = createCouter();

  // biến vẫn tăng vì đang được tham chiếu đến
  console.log("🚀 ~ file: index.js ~ line 14 ~ func", func())
  console.log("🚀 ~ file: index.js ~ line 14 ~ func", func())
  console.log("🚀 ~ file: index.js ~ line 14 ~ func", func())

  console.log(age);

  var age = 16;
  console.log(age);
  return (
    <div>

    </div>
  );
};

Closure.propTypes = {

};

export default Closure;