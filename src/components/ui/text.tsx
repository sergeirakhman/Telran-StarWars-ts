
const Text = ({children}: {children: string}) => {
    return (
        <p className={'text-justify text-3xl tracking-widest leading-normal'}>{children}</p>
    );
};

export default Text;