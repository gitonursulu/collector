'use client'

// app/fis-isleme/page.js
import { FileUploader } from 'evergreen-ui';

export default function ReceiptProcessPage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Fiş İşleme</h1>
      <FileUploader
        label="Upload your receipts"
        description="You can upload multiple files here."
        maxFiles={50}
        onChange={files => console.log(files)}
      />
    </div>
  );
}
