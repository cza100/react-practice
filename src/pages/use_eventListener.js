import React, { useState, useCallback } from 'react';

import { Typography, Divider, Input, InputNumber } from 'antd';

import useEventListener from '../hooks/use_eventListener';

const { Title, Paragraph } = Typography;

const UseEventListener = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Event handler utilizing useCallback ...
  // ... so that reference never changes.
  const handler = useCallback(
    ({ clientX, clientY }) => {
      // Update coordinates
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );

  // Add event listener using our hook
  useEventListener('mousemove', handler);

  return (
    <div>
      <Typography>
        <Title>useEventListener</Title>
        <Paragraph>处理Event事件监听</Paragraph>
      </Typography>
      <Divider />

      <Paragraph>
        当前鼠标坐标为：[{coords.x}, {coords.y}]
      </Paragraph>
    </div>
  );
};

export default UseEventListener;
