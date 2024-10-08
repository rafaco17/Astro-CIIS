import styles from "../styles/Dialog.module.css";

interface Props {
  icon: any, 
  message: any,
  open: Boolean,
  style?: any, 
  onClose: () => void
}

const icons: any = {
  success: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 19.6C15.302 19.6 19.6 15.3019 19.6 9.99999C19.6 4.69806 15.302 0.399994 10 0.399994C4.69809 0.399994 0.400024 4.69806 0.400024 9.99999C0.400024 15.3019 4.69809 19.6 10 19.6ZM14.4486 8.44852C14.9172 7.97989 14.9172 7.22009 14.4486 6.75147C13.9799 6.28284 13.2201 6.28284 12.7515 6.75147L8.80002 10.7029L7.24855 9.15146C6.77992 8.68284 6.02012 8.68284 5.5515 9.15146C5.08287 9.62009 5.08287 10.3799 5.5515 10.8485L7.9515 13.2485C8.42012 13.7172 9.17992 13.7172 9.64855 13.2485L14.4486 8.44852Z"
        fill="#3AAF62"
      />
    </svg>
  ),
  warning: (
    <svg
      width="28"
      height="26"
      viewBox="0 0 28 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8625 2.57798C12.2388 0.131234 15.7615 0.131233 17.1378 2.57798L27.1823 20.4349C28.5322 22.8347 26.7981 25.7999 24.0447 25.7999H3.95558C1.20221 25.7999 -0.531963 22.8347 0.817911 20.435L10.8625 2.57798ZM15.8 20.4001C15.8 21.3942 14.9941 22.2001 14 22.2001C13.0059 22.2001 12.2 21.3942 12.2 20.4001C12.2 19.406 13.0059 18.6001 14 18.6001C14.9941 18.6001 15.8 19.406 15.8 20.4001ZM14 6.0001C13.0059 6.0001 12.2 6.80598 12.2 7.8001V13.2001C12.2 14.1942 13.0059 15.0001 14 15.0001C14.9941 15.0001 15.8 14.1942 15.8 13.2001V7.8001C15.8 6.80598 14.9941 6.0001 14 6.0001Z"
        fill="#DF7979"
      />
    </svg>
  ),
};

export default function Dialog({ icon, message, open, style, onClose }: Props) {
  if (!open) return;

  return (
    <>
      <div className={`${styles.dialog}`} style={style} onClick={onClose}>
        <div className={`${styles.dialogContainer}`}>
          <div className={`${styles.dialogIcon}`}>{icons[`${icon}`]}</div>
          <div className={`${styles.dialogMessage}`}>
            {message}
          </div>
        </div>
      </div>
      <div className={styles.overlay} onClick={onClose}></div>
    </>
  );
}
