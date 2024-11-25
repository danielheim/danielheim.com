"use client";

import { useEffect } from "react";
import { logEvent } from "firebase/analytics";
import { analytics } from "../firebase";

export function LogScreenView({
  screen,
  screenClass,
}: {
  screen: string;
  screenClass: string;
}) {
  useEffect(
    () => {
      if (!analytics) {
        console.warn("Firebase Analytics not available.");
        return;
      }
      logEvent(analytics, "screen_view", {
        firebase_screen: screen,
        firebase_screen_class: screenClass,
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return <></>;
}
