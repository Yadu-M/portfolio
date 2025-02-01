import { Button } from "@/components/ui/button";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MouseEvent, useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const gitHubLink: URL = new URL("https://github.com/Yadu-M");
  const linkedInLink: URL = new URL("https://www.linkedin.com/in/yaduyem/");

  const [isSmallScreen, setSmallScreen] = useState<boolean>(false);

  type mouseEvent = MouseEvent<HTMLButtonElement, globalThis.MouseEvent>;
  const redirect = (e: mouseEvent, url: URL) => {
    e.preventDefault();
    window.open(url);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      if (event.matches) setSmallScreen(true);
      else setSmallScreen(false);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    if (mediaQuery.matches) {
      setSmallScreen(true);
    } else setSmallScreen(false);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <header className="flex justify-between">
      <NavLink to="/">
        <h1 className="mr-2 inline-block text-4xl">Yadii</h1>
      </NavLink>

      <nav className="flex gap-5">
        {isSmallScreen ? (
          <Button variant={"outline"} size={"icon"}>
            <BsGithub />
          </Button>
        ) : (
          <Button
            size={"sm"}
            variant={"outline"}
            onClick={(e) => {
              redirect(e, gitHubLink);
            }}
          >
            <BsGithub />
            <div className="font-mono">GitHub</div>
          </Button>
        )}

        {isSmallScreen ? (
          <Button variant={"outline"} size={"icon"}>
            <BsLinkedin />
          </Button>
        ) : (
          <Button
            size={"sm"}
            variant={"outline"}
            onClick={(e) => {
              redirect(e, linkedInLink);
            }}
          >
            <BsLinkedin />
            <div className="font-mono">LinkedIn</div>
          </Button>
        )}
        <ModeToggle />
      </nav>
    </header>
  );
};
