import styles from './SelectUser.module.css';

function SelectUser() {
	return (
		<>
			<img className={styles.logo} src="/logo.svg" alt="Логотип журнала" />
			<select name="user" id="user">
				<option value='1'>Антон</option>
				<option value='2'>Вася</option>
			</select>
		</>
	);
}

export default SelectUser;