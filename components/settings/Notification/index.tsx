import { ThirdHeading } from "@/components/global/heading";
import { Paragraph } from "@/components/global/text";

export const NotificationContainer = () => {
  return (
    <div>
      <ul>
        <li className="border-b border-gray-200">
          <ThirdHeading>Powiadomienie</ThirdHeading>
          <Paragraph>Udało Ci się zalogować.</Paragraph>
        </li>
      </ul>
    </div>
  );
};
