'use client';
import Link from 'next/link';
import { BsArrowRightCircle } from 'react-icons/bs';

// Define the type for a post
interface Post {
  id: number;
  title: string;
  description: string; // Adding a description for the blog post
  image: string;
}

const page: React.FC = () => {
  // Mock data for posts
  const posts: Post[] = [
    {
      id: 1,
      title: 'Mouse Adventures',
      description: 'An exciting journey of a mouse in a big world.',
      image: '/images/banner-01.jpg',
    },
    {
      id: 2,
      title: 'Panda Ride',
      description: 'Join a panda on an adventurous ride through the jungle.',
      image: '/images/banner-02.jpg',
    },
    {
      id: 3,
      title: 'Fox on Wheels',
      description: 'A thrilling ride with a quick-footed fox.',
      image: '/images/banner-07.jpg',
    },
    {
        id: 4,
        title: 'Fox on Wheels',
        description: 'A thrilling ride with a quick-footed fox.',
        image: '/images/banner-07.jpg',
      },
      {
        id: 5,
        title: 'Fox on Wheels',
        description: 'A thrilling ride with a quick-footed fox.',
        image: '/images/banner-07.jpg',
      },
      {
        id: 6,
        title: 'Fox on Wheels',
        description: 'A thrilling ride with a quick-footed fox.',
        image: '/images/banner-07.jpg',
      },
    // Add more posts as needed...
  ];

  return (
    <section className="mt-10 ml-20 mr-20">
      <div className="ml-10 mr-10 flex justify-between items-center ">
        <h1 className="text-white text-4xl font-bold">Featured Blog Posts</h1>
        <h3 className="text-white text-sm font-bold flex items-center gap-2">
          Discover More <BsArrowRightCircle className="text-xl" />
        </h3>
      </div>

      {/* BlogPost Section */}
      <div className="mt-6 ml-24 mr-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

// PostCard Component
const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-xl transition duration-300">
      <Link href={`/blog/${post.id}`}>
        <div className="block relative">
          <img src={post.image} alt={post.title} className="rounded-lg mb-4 w-30 h-42" />
          <h3 className="text-white text-lg font-semibold">{post.title}</h3>
          <p className="text-gray-400 text-sm mt-2">{post.description}</p>
          {/* Read More Button */}
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition duration-300"
          >
            Read More
          </button>
        </div>
      </Link>
    </div>
  );
};

export default page;
