import React from "react";
import SidebarContent from "@/components/sidebar/SidebarContent";

const DesktopSidebar = () => {
  return (
    <aside className="z-30 flex-shrink-0 hidden shadow-sm w-64 overflow-y-auto bg-[#043B33] lg:block">
      <SidebarContent />
    </aside>
  );
};

export default DesktopSidebar;
