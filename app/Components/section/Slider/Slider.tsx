import "./slider.css";

type SliderProps = {
    options: number[];
    value: number;
    onChange: (value: number) => void;
};

const Slider = ({ options, value, onChange }: SliderProps) => {
    const index = Math.max(options.indexOf(value), 0);

    return (
        <div className="slider" style={{ "--count": options.length, "--index": index } as React.CSSProperties}>
            <div className="slider-pill"></div>
            {options.map((option) => (
                <button
                    key={option}
                    type="button"
                    className={option === value ? "slider-option active" : "slider-option"}
                    onClick={() => onChange(option)}
                >
                    {option}
                </button>
            ))}
        </div>
    );
};

export default Slider;
