"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRenderMenus } from "./useRenderMenus";
import { Search, SearchIconWrapper } from "./styles";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "../common/button/button";
import { Input } from "../common/input/input";
import { useCart } from "@/src/app/cart/[id]/useCart";
import { useLoggedIn } from "@/src/hooks/auth/useLoggedIn";

const menuId = "primary-search-account-menu";
const mobileMenuId = "primary-search-account-menu-mobile";

// Render Menu for both mobile and desktop
const RenderCommonMenu: FC = () => {
  const router = useRouter();
  const {
    searchParams,
    handleProfileMenuOpen,
    handleMobileMenuOpen,
    handleReplace,
    handleSearch,
    session,
    cartInfo,
  } = useRenderMenus();
  const { hasLoggedIn } = useLoggedIn();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            display: { xs: "none", sm: "block", cursor: "pointer" },
          }}
        >
          <Link
            href={"/home"}
            style={{ textDecoration: "none", color: "black" }}
          >
            TechMarche
          </Link>
        </Typography>
        {/* TODO: Delete this later */}
        {hasLoggedIn ? (
          <Button
            variant={"outline"}
            size={"sm"}
            onClick={() => console.log("Sign out")}
          >
            Logout
          </Button>
        ) : (
          <Button asChild variant={"outline"} size={"sm"}>
            <Link href={"/login"}>Login</Link>
          </Button>
        )}
        <Search>
          <SearchIconWrapper sx={{ pl: "0.75rem" }}>
            <SearchIcon />
          </SearchIconWrapper>
          <Input
            type="text"
            defaultValue={searchParams.get("query")?.toString()}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search"
            aria-label={"search"}
            className="pl-10 focus-visible:border-none"
          />
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
            onClick={handleReplace}
          >
            <Badge badgeContent={cartInfo?.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

// Render Menu for Desktop version
const RenderMenu: FC = () => {
  const { anchorEl, isMenuOpen, handleMenuClose, session, signOut } =
    useRenderMenus();

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      {session && <MenuItem onClick={() => signOut()}>Logout</MenuItem>}
    </Menu>
  );
};

// Render Menu for Mobile version
const RenderMobileMenu: FC = () => {
  const {
    mobileMoreAnchorEl,
    isMobileMenuOpen,
    handleProfileMenuOpen,
    handleMobileMenuClose,
  } = useRenderMenus();

  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      sx={{ zIndex: "10" }}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={"4"} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        {/* <p>Profile</p> */}
      </MenuItem>
    </Menu>
  );
};

export { RenderCommonMenu, RenderMenu, RenderMobileMenu };
