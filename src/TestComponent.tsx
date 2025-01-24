import { useQuery } from '@tanstack/react-query';

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const TestComponent = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['posts'],  // Ensure queryKey is an array
    queryFn: fetchData,   // Function to fetch data
  });

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Fetched Posts</h2>
      <ul>
        {data.map((post: { id: number; title: string }) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestComponent;
