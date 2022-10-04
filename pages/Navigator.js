import * as React from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import PermMediaOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActual";
import PublicIcon from "@mui/icons-material/Public";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import TimerIcon from "@mui/icons-material/Timer";
import SettingsIcon from "@mui/icons-material/Settings";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";
import { Avatar } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import BusinessIcon from "@mui/icons-material/Business";
import CategoryIcon from "@mui/icons-material/Category";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PostAddIcon from "@mui/icons-material/PostAdd";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "@mui/material";

const categories = [
  {
    id: "Company",
    children: [
      {
        id: "About",
        icon: <BusinessIcon />,
        link: "/about",blank:"",
      },
      {
        id: "Service",
        icon: <CategoryIcon />,
        link: "/service",blank:"",
      },
      {
        id: "Blog",
        icon: <PostAddIcon />,
        link: "/blog",blank:"",
      },
      {
        id: "Contact",
        icon: <EmailIcon />,
        link: "/contact",
        blank:"",
      },
    ],
  },
  {
    id: "SNS",
    children: [
      {
        id: "Twitter",
        icon: <TwitterIcon />,
        link: "https://twitter.com/yuma_nanjo",
        blank:"blank",
      },
      {
        id: "Instagram",
        icon: <InstagramIcon />,
        link: "https://www.instagram.com/yuma_nanjo/",
        blank:"blank",
      },
    ],
  },
];

const item = {
  py: "2px",
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};

export default function Navigator(props) {
  const { ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }}
        >
          <Avatar
            src="/logo.svg"
            alt="imanoc logo"
            sx={{ mr: 2 }}
            variant="square"
          />
          imanoc
        </ListItem>

        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: "#121212" }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: "#fff" }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active, link,blank }) => (
              <ListItem disablePadding key={childId}>
                <a href={link} target={blank}>
                  <ListItemButton selected={active} sx={item}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                  </ListItemButton>
                </a>
              </ListItem>
            ))}

            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
