import { notFound } from 'next/navigation';
import Image from "next/legacy/image";
import { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, ClockIcon } from 'lucide-react';
import { blogPosts } from '@/lib/data';
import { MetaInfo } from '../meta-info';

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const post = blogPosts.find((post) => post.slug === params.slug);

    if (!post) {
        return {
            title: 'Post Not Found | DigiCat Blog',
        };
    }

    return {
        title: `${post.title} | DigiCat Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: ['DigiCat'],
            images: [
                {
                    url: post.image,
                    width: 800,
                    height: 400,
                    alt: post.title,
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        }
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const post = blogPosts.find((post) => post.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <Badge className="mb-4 bg-blue-500/80 hover:bg-blue-600">
                    {post.category}
                </Badge>

                <h1 className="text-4xl font-bold mb-4 text-white">
                    {post.title}
                </h1>

                <div className="flex gap-4 text-gray-400 text-sm mb-8">
                    <MetaInfo
                        icon={<CalendarIcon className="w-4 h-4" />}
                        text={post.date}
                    />
                    <MetaInfo
                        icon={<ClockIcon className="w-4 h-4" />}
                        text={post.readTime}
                    />
                </div>

                <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300">{post.excerpt}</p>
                    {/* Conteúdo completo do post aqui */}
                </div>
            </div>
        </article>
    );
}