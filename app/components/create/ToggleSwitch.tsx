import React, { useEffect, useState } from "react";

interface Props {
  name: string;
}

export const ToggleSwitch: React.FC<Props> = ({ name, ref }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    const hiddenInput = document.getElementById(name) as HTMLInputElement;
    if (hiddenInput) {
      hiddenInput.value = checked ? "on" : "off";
    }
  }, [checked, name]);

  return (
    <div className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        id={name}
        ref={ref}
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
      <input
        type="hidden"
        id={`hidden-${name}`}
        name={name}
        value={checked ? "on" : "off"}
      />
    </div>
  );
};
