/* eslint-disable no-use-before-define */
import { Button } from 'antd';
import React from 'react';

const HoistingJS = props => {

  const declaration = () => {
    console.log('declaration: ', add(3, 3));
    function add(num1, num2) {
      return num1 + num2;
    };
  }

  const expression = () => {
    try {
      console.log('declaration: ', subtract(3, 3));
      var subtract = function (num1, num2) {
        return num1 - num2;
      };
    } catch (error) {
      console.log(error);
    }
  }

  const varExample = () => {
    console.log('variable before declare:', variable)
    var variable = 'name';
    console.log('variable after declare:', variable)
  }
  const constExample = () => {
    try {
      console.log('constVariable before declare:', constVariable)
      const constVariable = 'name';
      console.log('constVariable after declare:', constVariable)
    } catch (error) {
      console.log(error);
    }
  }
  const letExample = () => {
    try {
      console.log('letVariable before declare:', letVariable)
      let letVariable = 'name';
      console.log('letVariable after declare:', letVariable)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='p-5'>
      <h1 className='text-center'>Hoisting</h1>

      {/* Khái niệm */}
      <b>Hosting là gì?</b>
      <p>- Hoisting được hiểu như đưa biến khởi tạo lên trên đầu cùng của hàm, chương trình.</p>

      <hr />

      {/* Cách thức và giải thích */}
      <h4>Cách thức khai báo hoisting</h4>
      <p>Khai báo <i>var</i>, <i>let</i>, <i>const</i> và <i>function</i> đều có thể hoisting, nhưng cách thức khác biệt.</p>
      <p>- Đối với <i>var</i> sẽ hoisted và khởi tạo giá trị mặc định là undefined.</p>
      <div>
        <p>- Đối với <i>function</i> thì được chia ra 2 hướng: <i>Function declaration</i> và <i>Function expression</i>:</p>
        <p className='ml-4'>+ Khi một file javascript compiled bởi browser,
          nhưng trước khi nó thực sự executed thì <i>Function declaration</i> sẽ được stored in memory và được đẩy lên nhưng chính xác ta vẫn nhìn nó vẫn ở vị trí cũ.
          Và khi javascript file thực sự run thì browser thực sự đã biết những function đó trước khi đọc code của file javascript. </p>
        <p className='ml-4'>+ Còn đối với <i>Function expression</i>, chương trình sẽ không lưu và đẩy lên, nên sẽ sinh ra lỗi <q>Type Error</q>. </p>
      </div>
      <p>- Còn <i>let</i> và <i>const</i>, không khởi tạo giá trị mặc định và đưa vùng nhớ đến nơi không thể truy cập ("vùng chết tạm thời - temporal dead zone").</p>

      <hr />
      {/* Ví dụ */}
      <h4>Các ví dụ (xem ở trong console của trình duyệt):</h4>
      <h5>- Ví dụ về <i>function</i>:</h5>
      <pre>
        {`
      * Hàm declaration và hàm expression
      // This was hoisted, so it works
      // returns 6
      add(3, 3);
      function add(num1, num2) {
        return num1 + num2;
      };
      
      
      // This was not, so it doesn't
      // returns Uncaught TypeError: subtract is not a function
      subtract(7, 4);
      var subtract = function (num1, num2) {
        return num1 - num2;
      };
      `}
      </pre>
      <p>Hàm khai báo: <Button onClick={declaration}>Run</Button></p>
      <p>Hàm biểu thức: <Button onClick={expression}>Run</Button></p>
      {/* ---------- */}
      <h5>- Ví dụ về <i>var</i>:</h5>
      <pre>
        {`
      console.log(variable); // undefined

      var variable = 'name';
      
      console.log(variable); // 'name'
      `}
      </pre>
      <p>Khai báo biến var: <Button onClick={varExample}>Run</Button></p>
      {/* ---------- */}
      <h5>- Ví dụ về <i>const</i> và <i>let</i>:</h5>
      <pre>
        {`
      console.log(constVariable); // Reference Error

      const constVariable = 'name';
      
      console.log(constVariable); // 'name'

      /------------

      console.log(letVariable); // Reference Error

      const letVariable = 'name';
      
      console.log(letVariable); // 'name'
      `}
      </pre>
      <p>Khai báo biến const: <Button onClick={constExample}>Run</Button></p>
      <p>Khai báo biến let: <Button onClick={letExample}>Run</Button></p>
    </div>
  );
};

HoistingJS.propTypes = {

};

export default HoistingJS;