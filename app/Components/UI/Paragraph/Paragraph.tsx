const Paragraph = ({ children }: { children: React.ReactNode }) => {
    const colors = {
        primary: "#1E2943",
        secondary: "#071329",
        light: "#8C919F",
        gradient:"linear-gradient(135deg,#F73398_0%,#F5CDE2_34%,#CD8BFB_69%,#6A07E4_100%)",
    };
    const fontSizes = {
        small: "12px",
        medium: "14px",
        large: "16px",
    };
  return <p className="text-[#8C919F] text-[14px]">{children}</p>;
};

export default Paragraph;