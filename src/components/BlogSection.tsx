import React from 'react';
import { Calendar } from 'lucide-react';

const BlogSection = () => {
  const blogs = [
    {
      title: "Transforming Prison Oversight in Arizona",
      excerpt: "How community-led monitoring is changing the landscape of correctional facility accountability...",
      date: "March 15, 2024",
      author: "John Fabricius",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
    },
    {
      title: "Breaking the Cycle: A New Approach to Recovery",
      excerpt: "Innovative strategies in substance use support and advocacy that prioritize human dignity...",
      date: "March 10, 2024",
      author: "J Alexandria Hunt-Garcia",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
    },
    {
      title: "Legislative Updates: Spring 2024",
      excerpt: "Recent developments in Arizona's criminal legal system reform efforts and what's next...",
      date: "March 5, 2024",
      author: "Jessica Johnson",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights and stories from the frontlines of criminal legal system reform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {blog.date}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {blog.author}</span>
                  <a
                    href="#"
                    className="text-purple-600 hover:text-purple-700 font-medium"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;