import React, { useEffect, useState } from "react";

interface Props {
  name: string;
  onChange: (value: string) => void;
  value?: string;
}

export const ToggleSwitch: React.FC<Props> = ({
  name,
  value = "off",
  onChange,
}) => {
  const [checked, setChecked] = useState(value === "on");

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange(newChecked ? "on" : "off");
  };

  useEffect(() => {
    setChecked(value === "on");
  }, [value]);

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
