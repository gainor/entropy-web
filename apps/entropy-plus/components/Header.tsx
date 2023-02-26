import { Icon, IconName, Text } from "dsl";
import Link from "next/link";
import { css } from "utils";
import { MOCK_PROFILE } from "../services/mocks";
import ProfileIcon from "./ProfileIcon";

const Header = () => {
  const isAuthed = true;
  return (
    <div className={css("flex", "justify-between")}>
      <Link href={isAuthed ? "/sort" : "/"}>
        <Icon name={IconName.Logo} size={41} />
      </Link>
      {isAuthed && (
        <div className={css("flex", "items-center", "gap-6")}>
          <Link href={"/upload"}>
            <Icon name={IconName.Plus} size={29} />
          </Link>
          <Link href={"/dashboard"}>
            <Icon name={IconName.FourSquare} size={29} />
          </Link>
          <Link href={`/curator/gainor`}>
            <ProfileIcon profile={MOCK_PROFILE} />
          </Link>
        </div>
      )}
      {!isAuthed && (
        <Link href={"/signup"}>
          <Text bold>Signup</Text>
        </Link>
      )}
    </div>
  );
};

export default Header;