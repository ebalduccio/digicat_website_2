interface MetaInfoProps {
    icon: React.ReactNode;
    text: string;
    className?: string;
}

export function MetaInfo({ icon, text, className }: MetaInfoProps) {
    return (
        <div className={`flex items-center gap-1 ${className}`}>
            {icon}
            <span>{text}</span>
        </div>
    );
}