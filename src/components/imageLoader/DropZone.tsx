import React, { useState } from "react";
import Image from "next/image";
import styles from "./DropZone.module.scss";
import { useDropzone } from "react-dropzone";
import { IPreview } from "@/types";
import { UploadActionType } from "@/reducers";

const DropZone = ({ data, dispatch }: any) => {
  const [previews, setPreviews] = useState<IPreview[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 5,
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles: File[]) => {
      setPreviews(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      const existingFiles = data.fileList.map((f: any) => f.name);
      // check if file already exists, if so, don't add to fileList
      // this is to prevent duplicates
      const files = acceptedFiles.filter(
        (f) => !existingFiles.includes(f.name)
      );

      dispatch({ type: UploadActionType.UPLOAD, payload: files });
    },
  });

  const thumbs = previews.map((preview: IPreview) => (
    <div className={styles.thumb} key={preview.name}>
      <div className={styles.thumbInner}>
        <img
          src={preview.preview}
          className={styles.img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(preview.preview);
          }}
        />
      </div>
    </div>
  ));

  const uploadFiles = async () => {
    let files = data.fileList;
    const formData = new FormData();
    files.forEach((file: any) => formData.append("files", file));

    // Upload the files as a POST request to the server using fetch
    // Note: /api/fileupload is not a real endpoint, it is just an example
    const response = await fetch("/api/fileupload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Files uploaded successfully");
    } else {
      alert("Error uploading files");
    }
  };

  return (
    <>
      <div {...getRootProps({ className: styles.dropzone })}>
        <Image src="/upload.svg" alt="upload" height={50} width={50} />

        <input {...getInputProps({ className: styles.files })} />
        <h3 className={styles.uploadMessage}>Drag & Drop Your Images</h3>
      </div>
      <div className={styles.thumbsContainer}>{thumbs}</div>
      {data.fileList.length > 0 && (
        <button className={styles.uploadBtn} onClick={uploadFiles}>
          Upload
        </button>
      )}
    </>
  );
};

export default DropZone;
