import Dropzone from "react-dropzone-esm";
import styles from "../styles/Dropzone.module.css";
import { useState } from "react";

/**
 * Formats the size
 */
function formatBytes(bytes: number, decimals: number = 2) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

interface CustomDropzoneProps {
  selectedFile: any,
  setselectedFile: any
}

interface DropzoneProps {
  getRootProps: any,
  getInputProps: any
}

export default function CustomDropzone({ selectedFile, setselectedFile } : CustomDropzoneProps) {
  const [isdragEnter, setIsDragEnter] = useState(false);

  function handleAcceptedFiles(file: any) {
    file = file[0];
    const processedFile = Object.assign(file, {
      preview: URL.createObjectURL(file),
      formattedSize: formatBytes(file.size),
    });

    setselectedFile(processedFile);
  }

  return (
    <Dropzone
      onDragEnter={() => {
        setIsDragEnter(true);
      }}
      onDrop={(acceptedFile: any) => {
        setIsDragEnter(false);
        handleAcceptedFiles(acceptedFile);
      }}
      accept={{
        "image/*": [".jpeg", ".jpg", ".png"],
      }}
    >
      {({ getRootProps, getInputProps } : DropzoneProps) => (
        <div className={`${styles.dropzone} ${selectedFile ? (isdragEnter ? styles.borderIsDrag : styles.borderSelected) : (isdragEnter ? styles.borderIsDrag : styles.borderIsNoDrag)}`}>
          <div className={`${styles.dzMessage}`} {...getRootProps()}>
            <input {...getInputProps()} />
            {!isdragEnter ? (
              <>
                <div className={styles.dzImageOrIcon}>
                  {!selectedFile ? (
                    <svg width="54" height="60" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.600006 18.4C0.600006 17.7373 1.13726 17.2 1.80001 17.2H16.2C16.8627 17.2 17.4 17.7373 17.4 18.4C17.4 19.0627 16.8627 19.6 16.2 19.6H1.80001C1.13726 19.6 0.600006 19.0627 0.600006 18.4ZM4.55148 6.04852C4.08285 5.57989 4.08285 4.82009 4.55148 4.35147L8.15148 0.751466C8.37652 0.526423 8.68175 0.399994 9.00001 0.399994C9.31827 0.399994 9.62349 0.526422 9.84853 0.751466L13.4485 4.35147C13.9172 4.82009 13.9172 5.57989 13.4485 6.04852C12.9799 6.51715 12.2201 6.51715 11.7515 6.04852L10.2 4.49705L10.2 13.6C10.2 14.2627 9.66275 14.8 9 14.8C8.33726 14.8 7.8 14.2627 7.8 13.6L7.80001 4.49705L6.24853 6.04852C5.77991 6.51715 5.02011 6.51715 4.55148 6.04852Z" fill="#5A6D77" />
                    </svg>
                  ) : (
                    <img
                      width={120}
                      height={120}
                      alt={selectedFile.name}
                      src={selectedFile.preview}
                    />
                  )}
                </div>
                <button className={styles.buttonUpload}>Seleccione su imagen</button>
              </>
            ) : (
              <>
                <div className={styles.dzImageOrIcon}>
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="64" height="64" fill="#BABABA"/>
                    <path d="M21.3334 32L32 42.6666M32 42.6666L42.6667 32M32 42.6666V21.3333M58.6667 32C58.6667 46.7276 46.7276 58.6666 32 58.6666C17.2724 58.6666 5.33337 46.7276 5.33337 32C5.33337 17.2724 17.2724 5.33331 32 5.33331C46.7276 5.33331 58.6667 17.2724 58.6667 32Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <span className={styles.textDrag}>Arrastre los archivos a subir aquí</span>
              </>
            )}
          </div>
        </div>
      )}
    </Dropzone>
  );
}
