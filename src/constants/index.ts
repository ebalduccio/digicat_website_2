import { Brain, Code, Smartphone, Settings, Palette, Target, Search, Users, BookOpen, Briefcase, Clock, MessageSquare, FileText, Rocket, HelpCircle, Newspaper, Video } from 'lucide-react';

export const NavItems = [
    {
        label: 'Soluções',
        href: '/services',
        subItems: [
            { label: 'IA (Inteligência Artificial)', href: '/services/ai', icon: Brain },
            { label: 'Desenvolvimento Web', href: '/services/web-development', icon: Code },
            { label: 'Aplicativos IOS e Android', href: '/services/apps', icon: Smartphone },
            { label: 'Software Personalizado', href: '/services/software-development', icon: Settings },
            { label: 'UI/X Design', href: '/services/design', icon: Palette },
            { label: 'Marketing Digital', href: '/services/marketing', icon: Target },
            { label: 'SEO e Otimização', href: '/services/seo', icon: Search },
        ]
    },
    // {
    //     label: 'Portfólio',
    //     href: '/portfolio',
    //     subItems: [
    //         // {label: 'Cases', href: '/portfolio/cases', icon: Briefcase},
    //         {label: 'Projetos Recentes', href: '/portfolio/projects', icon: Clock},
    //         {label: 'Depoimentos', href: '/portfolio/testmonies', icon: MessageSquare},
    //         {label: 'Estudos de Caso', href: '/portfolio/case-study', icon: FileText}
    //     ]
    // },
    {
        label: 'Quem somos?',
        href: '/about/team',
        // subItems: [
        //     // { label: 'Nossa Missão', href: '/about/our-mission', icon: Rocket },
        //     { label: 'Nossa Equipe', href: '/about/team', icon: Users },
        //     // { label: 'Consultoria Gratuita', href: '/about/free-consultation', icon: HelpCircle },
        // ]
    },
    // {
    //     label: 'Recursos',
    //     href: '/resource',
    //     subItems: [
    //         { label: 'Blog', href: '/resource/blog', icon: Newspaper },
    //         { label: 'Como Fazemos', href: '/about/how-we-do', icon: BookOpen },
    //         { label: 'Tutoriais', href: '/about/tutorials', icon: Video },
    //     ]
    // },
    {
        label: 'Diginews',
        href: 'https://digicat.news'
    },
    {
        label: 'Fale Conosco',
        href: '/contact'
    },
];