import Link from 'next/link';
import styles from './page.module.css';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';
import MealsGrid from '@/components/meals/meals-grid';

export const metadata = {
    title: 'All Meals',
    description: 'Browse the delicious meals shared by our vibrant community.',
};

async function MealsST() {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />;
}

const MealsPage = () => {
    return (
        <>
            <header className={styles.header}>
                <h1>Delicious meals, created <span className={styles.highlight}>by you</span></h1>
                <p>Choose your favorite recipe and cook it yourself.</p>
                <p className={styles.cta}>
                    <Link href="/meals/share">Share your favorite recipe</Link>
                </p>
            </header>
            <main className={styles.main}>
                <Suspense fallback={<p className={styles.loading}>Fetching meals....</p>}>
                    <MealsST />
                </Suspense>
            </main>
        </>
    );
};

export default MealsPage;