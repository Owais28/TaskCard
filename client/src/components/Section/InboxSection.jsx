import React from "react";
import { MobileContainer } from "../Container/MobileContainer";
import { IconButton, Stack, Typography } from "@mui/material";
import { MoreHorizSharp } from "@mui/icons-material";
import { VerticalContainer } from "../Container/VerticalContainer";
import { Searchbar } from "../Searchbar/Searchbar";
import { NotificationComponent } from "../Notification/NotificationComponent";
import { ChatComponent } from "../Chat/ChatComponent";

export const InboxSection = () => {
  return (
    <MobileContainer>
      <Stack
        direction="row"
        px={2}
        py={1}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography fontWeight="bold" fontFamily="Rubik" fontSize="small">
          Inbox
        </Typography>
        <IconButton>
          <MoreHorizSharp fontSize="small" />
        </IconButton>
      </Stack>
      <VerticalContainer>
        <Searchbar />
        <Stack>
          {[...new Array(20)].map((item, index) => {
            return (
              <ChatComponent
                message={"Wow. This is really epic"}
                numOfMsg={10}
                sender={"Tiki Mobile App Group"}
                time={"09:41"}
                key={index}
              />
            );
          })}
        </Stack>
      </VerticalContainer>
    </MobileContainer>
  );
};
