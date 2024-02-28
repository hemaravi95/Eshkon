import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';
import { RootState } from '../redux/ReduxStore';
import styles from '../styles/design.module.scss'
import { FaMoon, FaSun } from "react-icons/fa";

export default function Header() {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.app.theme);

    return (
        <header className={styles.header}>
            <div className=" mx-auto flex justify-between items-center p-2">
                <h4>Test App</h4>
                <button className={styles.theme_button} onClick={() => dispatch(toggleTheme())}>
                    {theme === 'light' ? <FaMoon /> : <FaSun style={{ color: 'yellow' }} />}
                </button>
            </div>
        </header>
    );
}