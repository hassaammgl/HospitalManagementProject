import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <Link href={"/signup"}>
        <Button variant={"link"}>Signup</Button>
      </Link>
      <Link href={"/login"}>
        <Button variant={"link"}>Login</Button>
      </Link>
      <Link href={"/logout"}>
        <Button variant={"link"}>Logout</Button>
      </Link>
    </div>
  );
};

export default Header;
