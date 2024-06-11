import ButtonFill from "./ButtonFill";
import ListConference from "./ListConference";
import { Element } from "react-scroll";

const Conference = ({ conferences }) => {
  return (
    <Element as="section" className="pt-6 mt-6 md:mx-8" name="conference">
      <ButtonFill content="Conference" />
      <h2 className="font-kontes text-[38px] md:text-[58px] text-white pb-[5rem] pl-3 md:pl-0">
        Huit <span className="text-yellow">conférences</span> passionnantes.
      </h2>
      <div className="flex items-center  flex-wrap justify-center relative">
        {conferences.map((item) => (
          <ListConference key={item.id} {...item} />
        ))}
      </div>
    </Element>
  );
};

export default Conference;
