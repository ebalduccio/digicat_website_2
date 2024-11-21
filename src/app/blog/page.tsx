import { Metadata } from 'next';
import { blogPosts } from '@/lib/data';
import { BlogCard } from './blog-card';

export const metadata: Metadata = {
    title: 'DigiCat Tech Blog',
    description: 'Latest articles about technology, AI, performance, and security.',
};

export default function BlogPage() {
    return (
        <section className="container mx-auto px-4 py-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-white">
                Digicat Blog
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post, index) => (
                    <BlogCard
                        key={post.id}
                        post={post}
                        isFeature={index === 0}
                    />
                ))}
            </div>
        </section>
    )
}