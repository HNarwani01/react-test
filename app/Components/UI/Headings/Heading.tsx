const colors = {
    primary: "text-[#1E2943]",
    secondary: "text-[#071329]",
    light: "text-[#8C919F]",
    gradient: "text-transparent bg-clip-text bg-[linear-gradient(135deg,#F73398_0%,#F5CDE2_34%,#CD8BFB_69%,#6A07E4_100%)]",
};

const fontSizes = {
    small: "text-[14px]",
    medium: "text-[28px]",
    large: "text-[32px]",
};

const headingTypes = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
} as const;

type HeadingsProps = {
    children: React.ReactNode;
    color?: keyof typeof colors;
    fontSize?: keyof typeof fontSizes;
    type?: keyof typeof headingTypes;
};

const Headings = ({ children, color = "primary", fontSize = "small", type = "h1" }: HeadingsProps) => {
    const Tag = headingTypes[type];

    return <Tag className={`w-full font-semibold ${colors[color]} ${fontSizes[fontSize]}`}>{children}</Tag>;
};

export default Headings;
