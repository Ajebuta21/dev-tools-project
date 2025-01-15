import React from "react";
import { globalStyles } from "../../global/globalStyles";
import ComponentsContainer from "../../components/others/ComponentsContainer";
import { SimpleAvatarCode } from "../../components/avatarComponents/simpleAvatar/SimpleAvatarCode";
import SimpleAvatar from "../../components/avatarComponents/simpleAvatar/SimpleAvatar";
import avatar from "../../images/avatar.png";
import { InitialsAvatarCode } from "../../components/avatarComponents/initialsAvatar/InitialsAvatarCode";
import InitialsAvatar from "../../components/avatarComponents/initialsAvatar/InitialsAvatar";
import StatusAvatar from "../../components/avatarComponents/statusAvatar/StatusAvatar";
import { StatusAvatarCode } from "../../components/avatarComponents/statusAvatar/StatusAvatarCode";

const AvatarsPage = () => {
  return (
    <div className={globalStyles.container2}>
      <h1 className={globalStyles.header}>Avatar components</h1>
      <div className="w-full flex flex-col gap-10">
        <ComponentsContainer
          title="simple avatar"
          code={SimpleAvatarCode}
          component={<SimpleAvatar imageUrl={avatar} altText="Avatar" />}
        />
        <ComponentsContainer
          title="initials avatar"
          code={InitialsAvatarCode}
          component={<InitialsAvatar name="John Doe" />}
        />
        <ComponentsContainer
          title="status indicator avatar"
          code={StatusAvatarCode}
          component={
            <StatusAvatar imageUrl={avatar} altText="Avatar" isOnline={true} />
          }
        />
      </div>
    </div>
  );
};

export default AvatarsPage;
