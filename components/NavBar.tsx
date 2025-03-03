"use client";
import Link from "next/link";
import { MagicWand } from "./Icons/magicWand";
import { usePathname } from "next/navigation";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useRouter } from "next/navigation";

export const NavBar = () => {
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleGoFlash = () => {
    router.push("/flash-card");
    handleClose();
  };

  const handleGoQuiz = () => {
    router.push("/quiz");
    handleClose();
  };

  return (
    <div className="navbarWrapper">
      <Link href="/" className="homeLink">
        <MagicWand />
        <h1 className="title">code quizzer</h1>
      </Link>

      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div className="menuItems">
          {pathname === "/quiz" ? (
            <MenuItem onClick={handleGoFlash}>Flashcards</MenuItem>
          ) : pathname === "/flash-card" ? (
            <MenuItem onClick={handleGoQuiz}>Quiz</MenuItem>
          ) : (
            <>
              <MenuItem onClick={handleGoQuiz}>Quiz</MenuItem>
              <MenuItem onClick={handleGoFlash}>Flashcards</MenuItem>
            </>
          )}
        </div>
      </Menu>
    </div>
  );
};
