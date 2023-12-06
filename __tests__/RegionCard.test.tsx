import { render } from "@testing-library/react";
import RegionCard from "@/app/_components/RegionCard";
import "@testing-library/jest-dom";
const regionTestData = {
  id: 1,
  name: "Dahab",
  sub_regions: [],
  description:
    "a popular tourist destination—especially for serious windsurfers, who'll find some of the best conditions in the world off Dahab's beaches. Long known as a laid-back, backpacker-friendly town, Dahab is becoming more developed, yet retains a casual vibe. Finally, Dahab is also home to the Blue Hole, the world's most dangerous dive site",
  images: [
    {
      id: 55,
      image: "stage/regions/1/5D5zH1CUWaj9n9igtElZ72TH8B0ddvY6MEfm1RyQ.jpg",
      url: "https://spotx-uploads.s3.eu-central-1.amazonaws.com/stage/regions/1/5D5zH1CUWaj9n9igtElZ72TH8B0ddvY6MEfm1RyQ.jpg",
    },
  ],
  has_subRegions: true,
};

describe("UnitsCard", () => {
  it("renders correctly", () => {
    const { getByText } = render(<RegionCard region={regionTestData} />);

    expect(getByText(regionTestData.name)).toBeInTheDocument();
  });
});
