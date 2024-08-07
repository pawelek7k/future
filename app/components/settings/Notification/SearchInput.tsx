import { CiSearch } from "react-icons/ci";

export const SearchInput: React.FC = () => {
  return (
    <div className="relative w-1/3">
      <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2" />
      <input
        type="text"
        name="text"
        placeholder="Search..."
        className="pl-10 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-950 w-full"
      />
    </div>
  );
};
