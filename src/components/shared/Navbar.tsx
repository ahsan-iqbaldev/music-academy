"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}><MenuItem setActive={setActive} active={active} item="Home"/></Link>
        <MenuItem setActive={setActive} active={active} item="Our courses">
        <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">All Courses</HoveredLink>
            <HoveredLink href="/interface-design">Basic Music Theory</HoveredLink>
            <HoveredLink href="/seo">Advanced Composition</HoveredLink>
            <HoveredLink href="/branding">Songwriting</HoveredLink>
            <HoveredLink href="/branding">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}><MenuItem setActive={setActive} active={active} item="Contact Us"/></Link>
      </Menu>
    </div>
  );
};

export default navbar;
