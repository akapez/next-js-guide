import Link from 'next/link';
import logo from '@/assets/logo.png';
import styles from './main-header.module.css';
import Image from 'next/image';
import HeaderBackground from './header-background';


const MainHeader = () => {
    return (
        <>
            <HeaderBackground />
            <header className={styles.header}>
                <Link href="/" className={styles.logo}>
                    <Image src={logo} alt="A plate with food" priority />
                    NextLevel Food
                </Link>

                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link href="/meals">Browse Meals</Link>
                        </li>
                        <li>
                            <Link href="/community">Foodies Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default MainHeader;