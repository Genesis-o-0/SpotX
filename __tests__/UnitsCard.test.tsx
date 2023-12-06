import { render } from "@testing-library/react";
import UnitsCard from "@/app/_components/UnitsCard";
import "@testing-library/jest-dom";
import { Property } from "@/types";

const unitsTestData: Property = {
  id: 98,
  code: "9",
  default_price: 3000,
  current_price: 3000,
  title: "test sizes",
  description: "test sizes test sizestest sizestest sizes",
  longitude: "31.00000000",
  latitude: "29.00000000",
  check_in: "10:00:00",
  check_out: "12:00:00",
  bed_rooms: 1,
  beds: 1,
  guests: null,
  bathrooms: 1,
  region_id: 164,
  max_guests_number: 12,
  is_families_only: 0,
  is_visible: 1,
  reservations_count: null,
  near_lower_price: null,
  type: "chalet",
  is_favourite: false,
  avg_unit_rate: null,
  nearest_active_ranges: [],
  main_image: {
    id: 592,
    unit_id: 98,
    is_default: 1,
    model: null,
    path: "stage/units/98/original/tB5XSCridLADeabjXzZGi3oMothqYjWKx5r9bWDQ.jpg",
    type: "image",
    sizes: ["original", "thumbnail"],
    created_at: "2023-07-02T11:17:14.000000Z",
    updated_at: "2023-07-04T20:25:07.000000Z",
    deleted_at: null,
    url: "https://spotx-uploads.s3.eu-central-1.amazonaws.com/stage/units/98/original/tB5XSCridLADeabjXzZGi3oMothqYjWKx5r9bWDQ.jpg",
  },
  active_ranges: [],
  images: [
    {
      id: 592,
      type: "image",
      url: "https://spotx-uploads.s3.eu-central-1.amazonaws.com/stage/units/98/original/tB5XSCridLADeabjXzZGi3oMothqYjWKx5r9bWDQ.jpg",
      is_default: 1,
      sizes: ["original", "thumbnail"],
    },
  ],
  owner: {
    id: 18,
    name: "Mahmoud Nasser",
    email: "mahmoudnasser315@gmail.com",
    email_verified_at: null,
    phone: "+201206834859",
    phone_verified_at: null,
    image:
      "https://spotx-uploads.s3.eu-central-1.amazonaws.com/stage/owners/9qTZLnJUqDJHhoL4qCGn6oK5Nm9jWx8RAzBuCNQi.jpg",
    national_id_image:
      "https://spotx-uploads.s3.eu-central-1.amazonaws.com/stage/owners-national-ids/n6PyF6lqcG6sVp0Qw75l1KXyUPKwbXGHnaWBjgST.jpg",
    national_id: "54867615701543",
    whatsapp: "+201206834859",
    type: "owner",
    notifications_count: 0,
    sent_notifications: 1,
  },
  rooms: [],
  rate: 0,
  fav: 2,
  visits: 1,
  region_name: "Alexandria",
  sub_region_name: null,
};

describe("RegionCard", () => {
  it("renders correctly", () => {
    const { getByAltText, getByText } = render(
      <UnitsCard unitData={unitsTestData} />
    );
    expect(
      getByText(`${unitsTestData?.region_name} / ${"N/A"}`)
    ).toBeInTheDocument();
    expect(getByText(`Type: ${unitsTestData.type}`)).toBeInTheDocument();
    expect(
      getByText(`Price: ${unitsTestData.current_price} LE/ Per day`)
    ).toBeInTheDocument();
  });
});
