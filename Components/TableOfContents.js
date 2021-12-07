import { useState, useContext } from "react";
import { PageContext } from "./Book";

const Section = ({ page, children }) => {
  const { test, switchPage, getCurrentPage } = useContext(PageContext);
  return (
    <div className="flex items-center justify-between w-full flex-1 px-5 text-center">
      <div className="">{children}</div>
      <button type="button" onClick={() => switchPage(page)}>
        {page}
      </button>
    </div>
  );
};

export const TableOfContents = () => {
  const [isYearBookOpen, setIsYearBookOpen] = useState(false);

  return (
    <div>
      <Section page={2}>Faculty and Staff</Section>
      <Section page={3}>Principal</Section>
      <Section page={4}>Faculty</Section>
      <Section page={5}>Student Council</Section>
      <Section page={6}>Student Portraits</Section>
      <Section page={7}>Student Groups</Section>
      {/* <SubSection page={7}>Mint Squad</SubSection>
      <SubSection page={8}>Degen Ape Mafia</SubSection>
      <SubSection page={9}>Degen Divas</SubSection>
      <SubSection page={10}>Endangered Apes</SubSection>
      <SubSection page={11}>DAA HK</SubSection>
      <SubSection page={12}>NB-Apes</SubSection>
      <SubSection page={9}>Coinaholics</SubSection> */}
      <Section page={8}>Student Groups</Section>
    </div>
  );
};
