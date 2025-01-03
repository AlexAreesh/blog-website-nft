'use client';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useState, useEffect } from 'react';

// Define the type for a post
interface Post {
  id: number;
  title: string;
  creator: string;
  currentBid: string;
  uploadTime: number; // Timestamp in milliseconds
  duration: number;   // Duration in milliseconds
  image: string;
}

const Blogpost: React.FC = () => {
  // Mock data for posts
  const posts: Post[] = [
    {
      id: 1,
      title: 'Mouse Adventures',
      creator: 'Kathryn Murphy',
      currentBid: '0.34',
      uploadTime: new Date().getTime() - 3600000, // 1 hour ago
      duration: 7200000, // 2 hours duration
      image: '/images/banner-01.jpg',
    },
    {
      id: 2,
      title: 'Panda Ride',
      creator: 'Cody Fisher',
      currentBid: '0.34',
      uploadTime: new Date().getTime() - 1800000, // 30 minutes ago
      duration: 7200000,
      image: '/images/banner-02.jpg',
    },
    {
      id: 3,
      title: 'Fox on Wheels',
      creator: 'Cody Fisher',
      currentBid: '0.34',
      uploadTime: new Date().getTime() - 5400000, // 1.5 hours ago
      duration: 7200000,
      image: '/images/banner-07.jpg',
    },

    {
        id: 4,
        title: 'Fox on Wheels',
        creator: 'Cody Fisher',
        currentBid: '0.34',
        uploadTime: new Date().getTime() - 5400000, // 1.5 hours ago
        duration: 7200000,
        image: '/images/card-item-01.jpg',
      },
      {
        id: 5,
        title: 'Fox on Wheels',
        creator: 'Cody Fisher',
        currentBid: '0.34',
        uploadTime: new Date().getTime() - 5400000, // 1.5 hours ago
        duration: 7200000,
        image: '/images/banner-07.jpg',
      },
      {
        id: 6,
        title: 'Fox on Wheels',
        creator: 'Cody Fisher',
        currentBid: '0.34',
        uploadTime: new Date().getTime() - 5400000, // 1.5 hours ago
        duration: 7200000,
        image: '/images/banner-07.jpg',
      },
      {
        id: 7,
        title: 'Fox on Wheels',
        creator: 'Cody Fisher',
        currentBid: '0.34',
        uploadTime: new Date().getTime() - 5400000, // 1.5 hours ago
        duration: 7200000,
        image: '/images/banner-07.jpg',
      },
      {
        id: 8,
        title: 'Fox on Wheels',
        creator: 'Cody Fisher',
        currentBid: '0.34',
        uploadTime: new Date().getTime() - 5400000, // 1.5 hours ago
        duration: 7200000,
        image: '/images/banner-07.jpg',
      },
      {
        id: 9,
        title: 'Fox on Wheels',
        creator: 'Cody Fisher',
        currentBid: '0.34',
        uploadTime: new Date().getTime() - 5400000, // 1.5 hours ago
        duration: 7200000,
        image: '/images/banner-07.jpg',
      },


      {
        id: 10,
        title: 'Fox on Wheels',
        creator: 'Cody Fisher',
        currentBid: '0.34',
        uploadTime: new Date().getTime() - 5400000, // 1.5 hours ago
        duration: 7200000,
        image: '/images/banner-07.jpg',
      },
      {
        id: 11,
        title: 'Fox on Wheels',
        creator: 'Cody Fisher',
        currentBid: '0.34',
        uploadTime: new Date().getTime() - 5400000, // 1.5 hours ago
        duration: 7200000,
        image: '/images/banner-07.jpg',
      },
      {
        id: 12,
        title: 'Fox on Wheels',
        creator: 'Cody Fisher',
        currentBid: '0.34',
        uploadTime: new Date().getTime() - 5400000, // 1.5 hours ago
        duration: 7200000,
        image: '/images/banner-07.jpg',
      },
      {
        id: 13,
        title: 'Fox on Wheels',
        creator: 'Cody Fisher',
        currentBid: '0.34',
        uploadTime: new Date().getTime() - 5400000, // 1.5 hours ago
        duration: 7200000,
        image: '/images/banner-07.jpg',
      },

      {
        id: 14,
        title: 'Fox on Wheels',
        creator: 'Cody Fisher',
        currentBid: '0.34',
        uploadTime: new Date().getTime() - 5400000, // 1.5 hours ago
        duration: 7200000,
        image: '/images/banner-07.jpg',
      },
      {
        id: 15,
        title: 'Fox on Wheels',
        creator: 'Cody Fisher',
        currentBid: '0.34',
        uploadTime: new Date().getTime() - 5400000, // 1.5 hours ago
        duration: 7200000,
        image: '/images/banner-07.jpg',
      },

      {
        id: 16,
        title: 'Fox on Wheels',
        creator: 'Cody Fisher',
        currentBid: '0.34',
        uploadTime: new Date().getTime() - 5400000, // 1.5 hours ago
        duration: 7200000,
        image: '/images/banner-07.jpg',
      },

      {
        id: 17,
        title: 'Fox on Wheels',
        creator: 'Cody Fisher',
        currentBid: '0.34',
        uploadTime: new Date().getTime() - 5400000, // 1.5 hours ago
        duration: 7200000,
        image: '/images/banner-07.jpg',
      },
      {
        id: 18,
        title: 'Fox on Wheels',
        creator: 'Cody Fisher',
        currentBid: '0.34',
        uploadTime: new Date().getTime() - 5400000, // 1.5 hours ago
        duration: 7200000,
        image: '/images/banner-07.jpg',
      },
  ];

// Pagination state
const [currentPage, setCurrentPage] = useState(1);
const postsPerPage = 6;  // Set to 6 for 3 above and 3 below per page

// Calculate the total pages
const totalPages = Math.ceil(posts.length / postsPerPage);

// Get posts for the current page
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

// Pagination handlers
const handleNextPage = () => {
  if (currentPage < totalPages) {
    setCurrentPage((prev) => prev + 1);
  }
};

const handlePrevPage = () => {
  if (currentPage > 1) {
    setCurrentPage((prev) => prev - 1);
  }
};


  return (
    <section className="mt-10 ml-20 mr-20">
      <div className="flex justify-between items-center ml-10 mr-10">
        <h1 className="text-white text-4xl font-bold">Featured Items</h1>
        <h3 className="text-white text-sm font-bold flex items-center gap-2">
          Discover More <BsArrowRightCircle className="text-xl" />
        </h3>
      </div>

      {/* BlogPost Section */}
      <div className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>


      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6 space-x-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded bg-gray-700 text-white ${
              currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-600'
            }`}
          >
            Previous
          </button>

          <span className="text-white">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded bg-gray-700 text-white ${
              currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-600'
            }`}
          >
            Next
          </button>
        </div>
      
    </section>
  );
};

// PostCard Component
const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  const [timeLeft, setTimeLeft] = useState<string>('');

  useEffect(() => {
    // Timer logic
    const updateTime = () => {
      const now = new Date();
      const diff = Math.max(0, post.uploadTime + post.duration - now.getTime());
      const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
      const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
      const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer); // Clean up on component unmount
  }, [post]);

  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-xl transition duration-300">
      <div className="relative">
        <img src={post.image} alt={post.title} className="rounded-lg mb-4" />
        <span className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded-lg">
          {timeLeft || '00h 00m 00s'}
        </span>
        <button className="absolute top-2 right-2 bg-gray-700 p-2 rounded-full hover:bg-gray-600">
          ❤️
        </button>
      </div>
      <h3 className="text-white text-lg font-semibold">{post.title}</h3>
      <p className="text-gray-400 text-sm">
        Created by: <span className="text-white">{post.creator}</span>
      </p>
      <div className="text-gray-400 mt-2">
        <span>Current Bid: </span>
        <span className="text-white">{post.currentBid} ETH</span>
      </div>
    </div>
  );
};



export default Blogpost;
