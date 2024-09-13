import { useRouter } from 'next/router';

export default function PortfolioProjectPage() {
    const router = useRouter();

    console.log(router.query.projectId);
    return (
        <div>
            <h1></h1>
        </div>
    );
}
