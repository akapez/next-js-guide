import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href={{
        pathname: 'clients/[id]',
        query: { id: 1 }
      }}>CLIENT 1</Link>
    </div>
  );
}
