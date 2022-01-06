import React, { useMemo } from 'react';

const RenderResult = ({ result }) => {

    console.log('result render');

    return (
        <div>
            {result.result}
        </div>
    );
};

//react memo giúp tránh re-render khi prop truyền vào lần tiếp theo cùng giá trị với lần trước đó.
export default React.memo(RenderResult);
