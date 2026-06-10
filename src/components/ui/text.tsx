interface TextProps {
    children: string;
    className?: string;
}

const Text = ({children, className}: TextProps) => {
    return (
        <p className={`text-3xl tracking-widest leading-normal ${className ?? 'text-justify'}`}>{children}</p>
    );
};

export default Text;