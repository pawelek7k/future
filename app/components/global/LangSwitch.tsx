interface LangSwitchProps {
  name: string;
  value: "pl" | "eng";
  onChange: (value: "pl" | "eng") => void;
}

export const LangSwitch: React.FC<LangSwitchProps> = ({
  name,
  value,
  onChange,
}) => {
  const checked = value === "eng";

  const handleChange = () => {
    const newValue: "pl" | "eng" = checked ? "pl" : "eng";
    onChange(newValue);
  };

  return (
    <div className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        id={name}
        className="sr-only"
        checked={checked}
        onChange={handleChange}
      />
      <div
        className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ease-in-out ${
          checked
            ? "bg-sky-950 dark:bg-rose-950"
            : "bg-sky-950/20 dark:bg-black/50"
        }`}
        onClick={handleChange}
      >
        <div
          className={`w-4 h-4 bg-neutral-100 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
            checked ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </div>
    </div>
  );
};
