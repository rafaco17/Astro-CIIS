import styles from '../../../../styles/PaymentOption.module.css';

interface Props {
  name: string,
  onClick: () => void,
  checked: boolean
}

export const PaymentOption = ({ name, onClick, checked }: Props) => {
  return (
    <div className={styles.option} onClick={onClick}>
      <input 
        type="radio" 
        id={name} 
        name="bank" 
        className={styles.radioButton} 
        checked={checked}
      />
      <label 
        htmlFor={name} 
        className={`${styles.radioLabel}`}
      >
        {name}
      </label>
    </div>
  );
};
