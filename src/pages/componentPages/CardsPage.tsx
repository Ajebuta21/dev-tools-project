import React from "react";
import { globalStyles } from "../../global/globalStyles";
import ComponentsContainer from "../../components/others/ComponentsContainer";
import { BasicCardCode } from "../../components/cardComponents/basicCard/BasicCardCode";
import BasicCard from "../../components/cardComponents/basicCard/BasicCard";
import { ImageCardCode } from "../../components/cardComponents/imageCard/ImageCardCode";
import ImageCard from "../../components/cardComponents/imageCard/ImageCard";
import Image from "../../images/mountain.png";
import Avatar from "../../images/avatar.png";
import { ProfileCardCode } from "../../components/cardComponents/profileCard/ProfileCardCode";
import ProfileCard from "../../components/cardComponents/profileCard/ProfileCard";
import toast from "react-hot-toast";

const CardsPage = () => {
  return (
    <div className={globalStyles.container2}>
      <h1 className={globalStyles.header}>Card components</h1>
      <div className="w-full flex flex-col gap-10">
        <ComponentsContainer
          title="basic card"
          code={BasicCardCode}
          component={
            <BasicCard
              title="Basic Card"
              description="This is a simple card with a title, description, and an action button."
              actionText="Learn More"
            />
          }
        />
        <ComponentsContainer
          title="card with image"
          code={ImageCardCode}
          component={
            <ImageCard
              imageUrl={Image}
              title="Image Card"
              description="This card features an image along with title and description."
              actionLink="#"
            />
          }
        />
        <ComponentsContainer
          title="profile card"
          code={ProfileCardCode}
          component={
            <ProfileCard
              avatarUrl={Avatar}
              name="Jane Doe"
              role="Software Engineer"
              onMessage={() => toast.success("Message clicked!")}
              onFollow={() => toast.success("User Followed!")}
            />
          }
        />
      </div>
    </div>
  );
};

export default CardsPage;
