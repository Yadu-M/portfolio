import { Button } from "@/components/ui/button";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { NavLink } from "react-router-dom";
import { IconType } from "react-icons/lib";

const NormalBtn = ({
  link,
  text,
  Icon,
}: {
  link: string;
  text: string;
  Icon: IconType;
}) => {
  return (
    <Button variant={"outline"} size={"sm"} asChild>
      <a href={`${link}`} referrerPolicy="no-referrer" target="_blank">
        <Icon />
        <div className="font-mono">{text}</div>
      </a>
    </Button>
  );
};

const SmallBtn = ({ link, Icon }: { link: string; Icon: IconType }) => {
  return (
    <Button variant={"outline"} size={"icon"} asChild>
      <a href={`${link}`} referrerPolicy="no-referrer" target="_blank">
        <Icon />
      </a>
    </Button>
  );
};

export const Header = () => {
  const gitHubLink: URL = new URL("https://github.com/Yadu-M");
  const linkedInLink: URL = new URL("https://www.linkedin.com/in/yaduyem/");

  const [isSmallScreen, setSmallScreen] = useState<boolean>(false);

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
          <SmallBtn Icon={BsGithub} link={`${gitHubLink}`} />
        ) : (
          <NormalBtn Icon={BsGithub} link={`${gitHubLink}`} text="GitHub" />
        )}

        {isSmallScreen ? (
          <SmallBtn Icon={BsLinkedin} link={`${linkedInLink}`} />
        ) : (
          <NormalBtn
            Icon={BsLinkedin}
            link={`${linkedInLink}`}
            text="LinkedIn"
          />
        )}
        <ModeToggle />
      </nav>
    </header>
  );
};
