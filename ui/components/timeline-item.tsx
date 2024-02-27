"use client";
import {
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  TimelineItem as MTTimelineItem,
} from "@material-tailwind/react";
import React from "react";

interface Props {
  icon?: React.ReactNode;
  header: React.ReactNode;
  body: React.ReactNode;
}

export function TimelineItem(props: Props) {
  return (
    <MTTimelineItem>
      <TimelineConnector>
        <span className="bg-fuchsia-950" />
      </TimelineConnector>
      <TimelineHeader>
        <TimelineIcon className="bg-white border-2 border-solid border-fuchsia-950">
          {props.icon}
        </TimelineIcon>
        {props.header}
      </TimelineHeader>
      <TimelineBody className="pb-5">{props.body}</TimelineBody>
    </MTTimelineItem>
  );
}
