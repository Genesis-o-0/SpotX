import { getUiBuilders } from "@/utils/getUiBuilders";
import SearchBar from "./_components/SearchBar";
import getSectionsdata from "@/utils/getSectionsdata";
import AppSections from "./_components/AppSections";
import Units from "./_components/Units";

interface LooseObject {
  [key: string]: any;
}

export default async function Home() {
  // getting configuration data from UI-Builders API
  const configurationData = await getUiBuilders();
  const sections = configurationData.data;
  const sectionsData = sections.map(async (section) => {
    // this object will contain all the sections data with a key value of section title
    const sectionsObj: LooseObject = {};
    const resolved = await getSectionsdata(section.content, section.filters);
    sectionsObj[section.title] = resolved;
    return sectionsObj;
  });

  const ResolvedSectionsData = await Promise.all(sectionsData).then((data) => {
    return data;
  });

  return (
    <main>
      <SearchBar />
      {ResolvedSectionsData.map((section, index) => {
        return <AppSections key={index} data={section} />;
      })}
      
    </main>
  );
}
