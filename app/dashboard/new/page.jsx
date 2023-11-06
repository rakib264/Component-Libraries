"use client";

import ChangeTheme from "@/components/theme/ChangeTheme";
import LightBox from "@/components/WithDarkMode/LightBox/ImageGallery";
import BasicModal from "@/components/WithDarkMode/Modals/BasicModal";
import FadeInModal from "@/components/WithDarkMode/Modals/FadeInModal";
import FadeUpModal from "@/components/WithDarkMode/Modals/FadeUpModal";
import LoginModal from "@/components/WithDarkMode/Modals/LoginModal";
import OptionalSizes from "@/components/WithDarkMode/Modals/OptionalSizes";
import ProfileModal from "@/components/WithDarkMode/Modals/ProfileModal";
import RegisterModal from "@/components/WithDarkMode/Modals/RegisterModal";
import RotatenLeftModal from "@/components/WithDarkMode/Modals/RotatenLeftModal";
import SlideInDownModal from "@/components/WithDarkMode/Modals/SlideIndown";
import SlideInUpModal from "@/components/WithDarkMode/Modals/SlideInUpModal";
import TabsModal from "@/components/WithDarkMode/Modals/TabsModal";
import VerticallyCenteredModal from "@/components/WithDarkMode/Modals/VerticallyCenteredModal";
import VideoModal from "@/components/WithDarkMode/Modals/VideoModal";
import ZoomInUpModal from "@/components/WithDarkMode/Modals/ZoomInUpModal";
import BasicImageTimeline from "@/components/WithDarkMode/Timeline/BasicImageTimeline";
import BasicTimeline from "@/components/WithDarkMode/Timeline/BasicTimeline";
import ModernTimeline from "@/components/WithDarkMode/Timeline/ModernTimeline";
import ProfileTimeline from "@/components/WithDarkMode/Timeline/ProfileTimeline";
import SearchOne from "@/elements/Search/Search1";
import { toggleTheme } from "@/features/slices/themeConfigSlices";
import React from "react";

const NewCom = () => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <BasicModal />
        <VerticallyCenteredModal />
        <OptionalSizes />
        <VideoModal />
        <div className="w-full flex items-center justify-center gap-3 py-4">
          <FadeInModal />
          <SlideInDownModal />
          <FadeUpModal />
          <SlideInUpModal />
          <RotatenLeftModal />
          <ZoomInUpModal />
        </div>
        <div className="w-full flex items-center justify-center gap-3 py-4">
          <TabsModal />
          <ProfileModal />
          <LoginModal />
          <RegisterModal />
        </div>
      </div>
      <ProfileTimeline />
      <ModernTimeline />
      <BasicTimeline />
      <BasicImageTimeline />
      <LightBox />
      <div className="w-full py-8">
      <SearchOne />
    </div>
    </div>
  );
};

export default NewCom;
