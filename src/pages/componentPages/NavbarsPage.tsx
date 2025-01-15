import React from "react";
import { globalStyles } from "../../global/globalStyles";
import ComponentsContainer from "../../components/others/ComponentsContainer";
import { SimpleNavbarCode2 } from "../../components/navbarComponents/simpleNavbar2/SimpleNavbarCode2";
import SimpleNavbar2 from "../../components/navbarComponents/simpleNavbar2/SimpleNavbar2";
import { SimpleNavbarCode } from "../../components/navbarComponents/simpleNavbar/SimpleNavbarCode";
import SimpleNavbar from "../../components/navbarComponents/simpleNavbar/SimpleNavbar";
import EcommerceNavbar from "../../components/navbarComponents/ecommerceNavbar/EcommerceNavbar";
import { EcommerceNavbarCode } from "../../components/navbarComponents/ecommerceNavbar/EcommerceNavbarCode";
import NavbarWithSearch from "../../components/navbarComponents/navbarWithSearch/NavbarWithSearch";
import { NavbarWithSearchCode } from "../../components/navbarComponents/navbarWithSearch/NavbarWithSearchCode";

const NavbarsPage = () => {
  return (
    <div className={globalStyles.container2}>
      <h1 className={globalStyles.header}>Navbars components</h1>
      <div className="w-full flex flex-col gap-10">
        <ComponentsContainer
          title="Simple navbar"
          code={SimpleNavbarCode}
          component={<SimpleNavbar />}
        />
        <ComponentsContainer
          title="Simple navbar 2"
          code={SimpleNavbarCode2}
          component={<SimpleNavbar2 />}
        />
        <ComponentsContainer
          title="ecommerce navbar"
          code={EcommerceNavbarCode}
          component={<EcommerceNavbar />}
        />
        <ComponentsContainer
          title="navbar with search"
          code={NavbarWithSearchCode}
          component={<NavbarWithSearch />}
        />
      </div>
    </div>
  );
};

export default NavbarsPage;
