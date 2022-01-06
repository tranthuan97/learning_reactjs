import React from 'react';
import PropTypes from 'prop-types';

const index = props => {

  // khái niệm: được hiểu như đưa biến khởi tạo lên trên đầu cùng của hàm, chương trình

  // khai báo var, let, const đều có hoisting nhưng khác biệt
  // đối với var, sẽ hoisted và khởi tạo giá trị mặc định là undefined
  // còn let và const, không khởi tạo giá trị mặc định và đưa vùng nhớ đến nơi không thể truy cập (temporal dead zone)


  return (
    <div>
      
    </div>
  );
};

index.propTypes = {
  
};

export default index;