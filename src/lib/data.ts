import { BlogPost } from "@/interfaces";

export function generateSlug(title: string, date: string, id: number): string {
    const formattedDate = date.replace(/-/g, '');
    const cleanTitle = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove caracteres especiais
        .replace(/\s+/g, '-') // Substitui espaços por hífens
        .trim();

    return `${formattedDate}-${cleanTitle}-${id}`;
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Introduction to DigiCat Tech",
        date: "2023-05-01",
        readTime: "5 min read",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "/images/digiquinho.png",
        category: "Technology",
        slug: "20230501-introduction-to-digicat-tech-1"
    },
    {
        id: 1,
        title: "Introduction to DigiCat Tech",
        date: "2023-05-01",
        readTime: "5 min read",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "/images/digiquinho.png",
        category: "Technology",
        slug: "20230501-introduction-to-digicat-tech-1"
    },
    {
        id: 1,
        title: "Introduction to DigiCat Tech",
        date: "2023-05-01",
        readTime: "5 min read",
        excerpt: "Learn about the latest digital catalysts in technology.",
        image: "/images/digiquinho.png",
        category: "Technology",
        slug: "20230501-introduction-to-digicat-tech-1"
    },
    {
        id: 1,
        title: "Introduction to DigiCat Tech",
        date: "2023-05-01",
        readTime: "5 min read",
        excerpt: "Learn about the latest digital catalysts in technology.",
        image: "/images/digiquinho.png",
        category: "Technology",
        slug: "20230501-introduction-to-digicat-tech-1"
    },
    {
        id: 2,
        title: "The Future of AI in Web Development",
        date: "2023-05-15",
        readTime: "8 min read",
        excerpt: "Exploring how AI is shaping the future of web development.",
        image: "/images/digiquinho.png",
        category: "AI",
        slug: "20230515-the-future-of-ai-in-web-development-2"
    },
    // ... outros posts
];