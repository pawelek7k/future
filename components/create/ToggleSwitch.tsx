import { useState } from "react";

interface Props {
  name: string;
}

export const ToggleSwitch: React.FC<Props> = ({ name }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        name={name}
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={checked}
        onChange={handleChange}
      />
      <div
        className={`peer ring-0 rounded-full outline-none duration-300 after:duration-500 w-6 h-6 shadow-md ${
          checked ? "bg-sky-950" : "bg-rose-950"
        } peer-focus:outline-none after:content-['✖️'] after:rounded-full after:absolute after:outline-none after:h-5 after:w-5 after:bg-gray-50 after:top-0.5 after:left-0.5 after:flex after:justify-center after:items-center peer-hover:after:scale-75 peer-checked:after:content-['✔️'] after:-rotate-180 peer-checked:after:rotate-0`}
      />
    </label>
  );
};
