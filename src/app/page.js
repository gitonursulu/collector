"use client";

import Layout from '../components/Layout';
import { Pane, Text, majorScale, Button, FilePicker } from 'evergreen-ui';

export default function Home() {
  return (
    <Layout>
      <Pane display="flex" flexDirection="column" alignItems="center">
        <Text size={600} marginBottom={majorScale(2)}>Upload Your Files</Text>
        <FilePicker
          multiple
          width={250}
          marginBottom={majorScale(2)}
          placeholder="Select files here..."
        />
        <Button appearance="primary">Upload</Button>
      </Pane>
    </Layout>
  );
}
