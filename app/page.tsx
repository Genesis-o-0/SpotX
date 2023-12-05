import { getUiBuilders } from "@/utils/getUiBuilders";
import HorizontalList from "./_components/HorizontalList";
import SearchBar from "./_components/SearchBar";
import getSectionsdata from "@/utils/getSectionsdata";

interface LooseObject {
  [key: string]: any;
}

export default async function Home() {
  const configurationData = await getUiBuilders();
  const sections = configurationData.data;
  const test = sections.map(async (section) => {
    const testObj: LooseObject = {};
    const resolved = await getSectionsdata(section.content, section.filters);
    testObj[section.title] = resolved;
    return testObj;
  });

  const sectionsData = await Promise.all(test).then((data) => {
    return data;
  });

  return (
    <main>
      <SearchBar />
      {sectionsData.map((section, index) => {
        return <HorizontalList key={index} data={section} />;
      })}
    </main>
  );
}
