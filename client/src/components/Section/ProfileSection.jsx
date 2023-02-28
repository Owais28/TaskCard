import React from "react";
import { MobileContainer } from "../Container/MobileContainer";
import { Avatar, Divider, IconButton, Stack, Typography } from "@mui/material";
import { MoreHorizSharp, ToggleOffRounded } from "@mui/icons-material";
import { grey, red } from "@mui/material/colors";
import {
  IoBagOutline,
  IoHelpCircleOutline,
  IoNotificationsOutline,
  IoPersonOutline,
  IoShieldCheckmarkOutline,
} from "react-icons/io5";
import { FiEye, FiLogOut } from "react-icons/fi";

export const ProfileSection = () => {
  return (
    <MobileContainer>
      <Stack
        direction="row"
        px={2.5}
        py={1}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography fontWeight="bold" fontFamily="Rubik" fontSize="medium">
          Profile
        </Typography>
        <IconButton>
          <MoreHorizSharp fontSize="small" />
        </IconButton>
      </Stack>
      <Stack gap={4} px={2.5} mt={5}>
        <Stack alignItems="center">
          <Avatar sx={{ mb: 1, width: 85, height: 85 }} />
          <Typography
            fontSize={20}
            fontWeight={"medium"}
            fontFamily={"Rubik"}
            mb={0.4}
          >
            Owais Athar
          </Typography>
          <Typography fontSize={13} fontFamily={"Rubik"}>
            owais_athar18
          </Typography>
        </Stack>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <ProfileStats number={27} title={"Projects"} />
          <ProfileStats number={759} title={"Tasks"} />
          <ProfileStats number={35} title={"Groups"} />
        </Stack>
        <Divider />
        <Stack gap={2.5}>
          <ProfileOption
            icon={<IoBagOutline size={24} color={grey[800]} />}
            option="Workspace"
          />
          <ProfileOption
            icon={<IoPersonOutline size={24} color={grey[800]} />}
            option="Edit Profile"
          />
          <ProfileOption
            icon={<IoNotificationsOutline size={24} color={grey[800]} />}
            option="Notifications"
          />
          <ProfileOption
            icon={<IoShieldCheckmarkOutline size={24} color={grey[800]} />}
            option="Security"
          />
          <ProfileOption
            icon={<IoHelpCircleOutline size={24} color={grey[800]} />}
            option="Help"
          />
          <ProfileOptionWithToggle
            icon={<FiEye size={20} color={grey[800]} />}
            option="Dark Theme"
          />
          <Stack direction={"row"} gap={2} alignItems={"center"}>
            <FiLogOut size={24} color={red[500]} />
            <Typography
              fontSize={"small"}
              fontFamily={"Rubik"}
              color={red[500]}
            >
              Logout
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </MobileContainer>
  );
};

const ProfileStats = ({ number, title }) => {
  return (
    <Stack alignItems={"center"} flex={1}>
      <Typography fontSize={20} fontWeight={"medium"} fontFamily={"Rubik"}>
        {number}
      </Typography>
      <Typography fontSize={13} fontFamily={"Rubik"} color={grey[500]}>
        {title}
      </Typography>
    </Stack>
  );
};

const ProfileOption = ({ option = "Unknown", icon, optionColor }) => {
  return (
    <Stack direction={"row"} gap={2} alignItems={"center"}>
      {/* <IoBag size={23} color={grey[400]} /> */}
      {icon}
      <Typography fontSize={"small"} fontFamily={"Rubik"} color={grey[800]}>
        {option}
      </Typography>
    </Stack>
  );
};

const ProfileOptionWithToggle = ({ option = "Unknown", icon }) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Stack direction={"row"} gap={2} alignItems={"center"}>
        {icon}
        <Typography fontSize={"small"} fontFamily={"Rubik"} color={grey[800]}>
          {option}
        </Typography>
      </Stack>
      <ToggleOffRounded sx={{ color: grey[400] }} />
    </Stack>
  );
};
