import React, { useState } from "react";

import { Typography, Divider, Button, Alert } from "antd";

import useAsync from "../hooks/use_async";

const { Title, Paragraph } = Typography;

const UseAsync = () => {
  const myFunction = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const rnd = Math.random() * 10;
        rnd <= 5
          ? resolve("Submitted successfully 🙌")
          : reject("Oh no there was an error 😞");
      }, 2000);
    });
  };

  const { execute, pending, value, error } = useAsync(myFunction, false);

  return (
    <div>
      <Typography>
        <Title>useAsync</Title>
        <Paragraph>处理异步任务的Hook.</Paragraph>
      </Typography>

      <Divider />

      <Button type="primary" loading={pending} onClick={execute}>
        Click me!
      </Button>

      {value && <Alert message={value} type="success" />}
      {error && <Alert message={error} type="error" />}
    </div>
  );
};

export default UseAsync;
