
import NewsList from '@/components/news-list';

const NewsPage = async () => {
    // const [error, setError] = useState();
    // const [loading, setLoading] = useState(false);
    // const [news, setNews] = useState([]);

    // useEffect(() => {
    //     async function fetchNews() {
    //         setLoading(true);
    //         const res = await fetch('http://localhost:8080/news');
    //         if (!res.ok) {
    //             setError('Failed to fetch news.');
    //             setLoading(false);
    //         }
    //         const news = await res.json();
    //         setLoading(false);
    //         setNews(news);
    //     }
    //     fetchNews();
    // }, []);

    const response = await fetch('http://localhost:8080/news');

    if (!response.ok) {
        throw new Error('Failed to fetch news.');
    }

    const news = await response.json();

    return (
        <>
            <h1>News Page</h1>
            <NewsList news={news} />
        </>
    );
};

export default NewsPage;