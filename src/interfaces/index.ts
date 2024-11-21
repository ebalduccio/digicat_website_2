interface CardAboutProps {
    title: string,
    content: string
}

interface TextProps {
    content: string
}

export type BlogPost = {
    id: number;
    title: string;
    date: string;
    readTime: string;
    excerpt: string;
    image: string;
    category: string;
    slug: string; // Novo campo
}