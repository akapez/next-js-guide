import Link from 'next/link';
import logo from '@/assets/logo.png';
import styles from './main-header.module.css';
import Image from 'next/image';
import HeaderBackground from './header-background';
import NavLink from './nav-link';


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
                            <NavLink href={'/meals'}>Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href={'/community'}>Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default MainHeader;