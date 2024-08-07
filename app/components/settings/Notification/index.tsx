import { ThirdHeading } from "@/app/components/global/heading";
import { Paragraph } from "@/app/components/global/text";
import { IoTrashBinOutline } from "react-icons/io5";
import { SearchInput } from "./SearchInput";

export const NotificationContainer: React.FC = () => {
  return (
    <div>
      <SearchInput />
      <ul className="mt-10">
        <li className="border-b border-gray-200 w-1/2">
          <ThirdHeading>Powiadomienie</ThirdHeading>
          <div className="flex justify-between">
            <Paragraph>Udało Ci się zalogować.</Paragraph>
            <IoTrashBinOutline className="cursor-pointer" />
          </div>
        </li>
      </ul>
    </div>
  );
};
