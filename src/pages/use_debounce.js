import React, { useState } from 'react';

import { Typography, Divider, Input, InputNumber } from 'antd';

import useDebounce from '../hooks/use_debounce';

const { Title, Paragraph } = Typography;

const UseDebounce = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [delay, setDealy] = useState(500);

  const debouncedValue = useDebounce(searchTerm, delay);

  return (
    <div>
      <Typography>
        <Title>useDebounce</Title>
        <Paragraph>处理debounce</Paragraph>
      </Typography>
      <Divider />
      <Input
        style={{ width: 400 }}
        placeholder="Input some value"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <span style={{ marginLeft: '1rem', marginRight: '0.5rem' }}>Dealy:</span>
      <InputNumber
        min={100}
        max={10000}
        defaultValue={500}
        precision={0}
        step={100}
        onChange={(e) => {
          setDealy(e);
        }}
      />
      <Paragraph>
        {debouncedValue && `Your input is ${debouncedValue}`}
      </Paragraph>
    </div>
  );
};

export default UseDebounce;
