import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HomePage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/dashboard_page');
  }, [router]);

  return null;
}

export default HomePage;