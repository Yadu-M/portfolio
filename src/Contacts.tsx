import { Link } from "react-router-dom";
import { Button } from "./components/ui/button";

export const Contacts = () => {
  return (
    <>
      <h3>Contact Me</h3>
      <Link to="mailto:yaduyem@gmail.com" target="_blank">
        <Button size={"nothing"} variant={"link"} type="button" className="">
          yaduyem@gmail.com
        </Button>
      </Link>
    </>
  );
};
