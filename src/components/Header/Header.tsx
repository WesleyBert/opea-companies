import styles from './Header.module.scss';

export const Header = () => {
    return( 
        <header className={styles.header}>
            <div className={styles.logo}>
                <span>Opea</span>
            </div>
            <div className={styles.user}>
                <span>Nome do Usuario</span>
                <span className={styles.icon}>👤</span>
            </div>
        </header>
    )
}