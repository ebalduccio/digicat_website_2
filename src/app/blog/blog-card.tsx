import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRightIcon, CalendarIcon, ClockIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { MetaInfo } from './meta-info';
import { BlogPost } from '@/interfaces';

interface BlogCardProps {
    post: BlogPost;
    isFeature?: boolean;
}

export function BlogCard({ post, isFeature = false }: BlogCardProps) {
    if (isFeature) {
        return (
            <Card
                className="
                    group bg-blue-800/30 backdrop-blur-sm border-blue-600/50 
                    overflow-hidden hover:shadow-lg transition-all duration-300
                    lg:col-span-3 flex flex-col sm:flex-row h-auto sm:h-[400px]
                "
            >
                <CardContent className="flex-1 p-6 sm:p-8 flex flex-col justify-between relative">
                    <div className="space-y-4">
                        <Badge
                            className="bg-blue-500/90 hover:bg-blue-600 transition-colors inline-flex"
                        >
                            {post.category}
                        </Badge>

                        <Link href={`/blog/${post.slug}`} className="block group/title">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover/title:text-blue-300 transition-colors line-clamp-3">
                                {post.title}
                            </h2>
                        </Link>

                        <p className="text-blue-200 text-base sm:text-lg line-clamp-6 lg:w-5/6">
                            {post.excerpt}
                        </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center gap-6 text-blue-300 text-sm">
                            <MetaInfo
                                icon={<CalendarIcon className="w-4 h-4" />}
                                text={post.date}
                                className="hover:text-blue-200 transition-colors"
                            />
                            <MetaInfo
                                icon={<ClockIcon className="w-4 h-4" />}
                                text={post.readTime}
                                className="hover:text-blue-200 transition-colors"
                            />
                        </div>

                        <Link
                            href={`/blog/${post.slug}`}
                            className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors group/link"
                        >
                            <span className="text-sm font-medium">Read article</span>
                            <ArrowRightIcon className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                        </Link>
                    </div>
                </CardContent>

                <div className="relative w-full sm:w-[45%] h-64 sm:h-auto overflow-hidden">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent pointer-events-none" />
                </div>
            </Card>
        );
    }

    return (
        <Card
            className="
                group bg-blue-800/30 backdrop-blur-sm border-blue-600/50 
                overflow-hidden hover:shadow-lg transition-all duration-300
                flex flex-col
            "
        >
            <div className="relative overflow-hidden">
                <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/90" />
                <Badge
                    className="absolute top-2 left-2 bg-blue-500/90 hover:bg-blue-600 transition-colors"
                >
                    {post.category}
                </Badge>
            </div>

            <CardContent className="flex flex-col flex-grow p-4">
                <div className="flex-grow">
                    <Link href={`/blog/${post.slug}`} className="block group/title">
                        <h2 className="text-xl font-semibold mb-2.5 text-white group-hover/title:text-blue-300 transition-colors">
                            {post.title}
                        </h2>
                    </Link>
                    <p className="text-blue-200 text-sm line-clamp-2">
                        {post.excerpt}
                    </p>
                </div>

                <div className="mt-4 pt-4 border-t border-blue-600/30 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-blue-300 text-xs">
                        <MetaInfo
                            icon={<CalendarIcon className="w-3.5 h-3.5" />}
                            text={post.date}
                            className="hover:text-blue-200 transition-colors"
                        />
                        <MetaInfo
                            icon={<ClockIcon className="w-3.5 h-3.5" />}
                            text={post.readTime}
                            className="hover:text-blue-200 transition-colors"
                        />
                    </div>

                    <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-1.5 text-blue-300 hover:text-blue-200 transition-colors"
                    >
                        <span className="text-sm">Read</span>
                        <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}