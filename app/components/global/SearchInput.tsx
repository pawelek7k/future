import { CiSearch } from "react-icons/ci";

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const SearchInput: React.FC<Props> = ({
  value,
  onChange,
  onKeyDown,
}) => {
  return (
    <div className="relative">
      <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 " />
      <input
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
        type="text"
        name="text"
        placeholder="Search..."
        className="pl-10 rounded-lg focus:outline-none w-full dark:focus:border-rose-950 px-3 py-2 border border-gray-300 bg-neutral-100 text-gray-900 placeholder-gray-500 focus:border-sky-950"
      />
    </div>
  );
};
