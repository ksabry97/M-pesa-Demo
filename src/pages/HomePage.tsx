import { Layout } from '../components/Layout';

const HomePage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to M-Pesa Marketplace
        </h1>
        <p className="text-lg text-gray-600">
          Find trusted professionals and services across Africa
        </p>
        {/* Hero section, service cards, and other content will go here */}
      </div>
    </Layout>
  );
};

export default HomePage;

