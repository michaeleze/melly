import React, {useState} from "react";
import NavBarMenu from '../navbar-menu';
import NavBarHeader from '../../molecules/navbar-header';
import { routes } from '../../../routes/routes';
import { mockSocialMediaItems } from '../../molecules/socialmedia-links/index.socialmedia';

const Navigation = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const handleCloseMenu = () => {
      setOpenMenu(false);
    };

    const handleOpenMenu = () => {
      setOpenMenu(!openMenu);
    };

    return(
        <nav>
            <NavBarHeader handleOpenMenu={handleOpenMenu} handleCloseMenu={handleCloseMenu} openMenu={openMenu} />
            <NavBarMenu handleCloseMenu={handleCloseMenu} openMenu={openMenu} routes={routes} socialMedia={mockSocialMediaItems}/>
        </nav>
        )
}

export default Navigation
