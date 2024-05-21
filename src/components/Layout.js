"use client";

import { Pane, Text, majorScale } from 'evergreen-ui';

const Layout = ({ children }) => {
  return (
    <Pane display="flex" flexDirection="column" minHeight="100vh">
      {/* <Pane background="tint2" padding={majorScale(2)}>
        <Text size={600} fontWeight={500}></Text>
      </Pane> */}
      <Pane flex="1" padding={majorScale(3)}>
        {children}
      </Pane>
      <Pane background="tint2" padding={majorScale(2)} textAlign="center">
        <Text size={300}>© 2024 Collector</Text>
      </Pane>
    </Pane>
  );
};

export default Layout;
