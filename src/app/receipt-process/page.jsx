'use client'

// app/fis-isleme/page.js
import { FileUploader, Pane, FileCard, Alert, Button } from 'evergreen-ui';
import { useCallback, useState, React, useMemo } from 'react';

export default function ReceiptProcessPage() {
  const acceptedMimeTypes = [MimeType.jpeg, MimeType.pdf]
  const maxFiles = 5
  const maxSizeInBytes = 50 * 1024 ** 2 // 50 MB
  const [files, setFiles] = useState([])
  const [fileRejections, setFileRejections] = useState([])

  const values = useMemo(() => [...files, ...fileRejections.map((fileRejection) => fileRejection.file)], [
    files,
    fileRejections,
  ])

  const handleRemove = useCallback(
    (file) => {
      const updatedFiles = files.filter((existingFile) => existingFile !== file)
      const updatedFileRejections = fileRejections.filter((fileRejection) => fileRejection.file !== file)

      // Call rebaseFiles to ensure accepted + rejected files are in sync (some might have previously been
      // rejected for being over the file count limit, but might be under the limit now!)
      const { accepted, rejected } = rebaseFiles(
        [...updatedFiles, ...updatedFileRejections.map((fileRejection) => fileRejection.file)],
        { acceptedMimeTypes, maxFiles, maxSizeInBytes }
      )

      setFiles(accepted)
      setFileRejections(rejected)
    },
    [acceptedMimeTypes, files, fileRejections, maxFiles, maxSizeInBytes]
  )

  const postOpenAi = useCallback(async () => {
    if (files.length === 0) {
      console.log("No files to upload.");
      return;
    }

    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`file${index}`, file);
    });

    try {
      const response = await fetch('http://localhost:5000/OpenAi/Files', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  }, [files]);

  const fileCountOverLimit = files.length + fileRejections.length - maxFiles
  const fileCountError = `You can upload up to 5 files. Please remove ${fileCountOverLimit} ${
    fileCountOverLimit === 1 ? 'file' : 'files'
  }.`

  return (
    <Pane maxWidth={654}>
      <FileUploader
        acceptedMimeTypes={acceptedMimeTypes}
        label="Upload Files"
        description="You can upload up to 5 files. Files can be up to 50MB. You can upload .jpg and .pdf file formats."
        disabled={files.length + fileRejections.length >= maxFiles}
        maxSizeInBytes={maxSizeInBytes}
        maxFiles={maxFiles}
        onAccepted={setFiles}
        onRejected={setFileRejections}
        renderFile={(file, index) => {
          const { name, size, type } = file
          const renderFileCountError = index === 0 && fileCountOverLimit > 0

          return (
            <div key={`${file.name}-${index}`}>
              {renderFileCountError && <Alert intent="danger" marginBottom={majorScale(2)} title={fileCountError} />}
              <FileCard
                name={name}
                onRemove={() => handleRemove(file)}
                sizeInBytes={size}
                type={type}
              />
            </div>
          )
        }}
        values={values}
      />
      <Button onClick={postOpenAi}>Upload Files</Button>
    </Pane>
  )
}
