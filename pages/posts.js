import { useEffect, useState } from 'react';
import useSWR from 'swr';

export default function posts(props) {
    const [posts, setPosts] = useState(props.posts);

    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', (url) => fetch(url).then(res => res.json()));


    useEffect(() => {
        if (data) {
            const transformedPosts = [];
            for (const key in data) {
                transformedPosts.push({
                    id: key,
                    title: data[key].title,
                    body: data[key].body
                });
            }

            setPosts(transformedPosts);
        }
    }, [data]);

    if (isLoading && !posts) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Something went wrong!</p>;
    }

    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}


export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    const transformedPosts = [];
    for (const key in data) {
        transformedPosts.push({
            id: key,
            title: data[key].title,
            body: data[key].body
        });
    }
    return { props: { posts: transformedPosts }, revalidate: 10 };
}