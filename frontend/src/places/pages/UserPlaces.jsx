import { useParams } from "react-router-dom";
import { PlaceList } from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Marina",
    description: "Beach in Chennai",
    imageUrl:
      "https://images.pexels.com/photos/4055663/pexels-photo-4055663.jpeg",
    address: "Marina Beach, Triplicane, Chennai, Tamil Nadu",
    location: {
      lat: 13.05183,
      lng: 80.282821,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Marina",
    description: "Beach in Chennai",
    imageUrl:
      "https://images.pexels.com/photos/4055663/pexels-photo-4055663.jpeg",
    address: "Marina Beach, Triplicane, Chennai, Tamil Nadu",
    location: {
      lat: 13.05183,
      lng: 80.282821,
    },
    creator: "u2",
  },
];

export const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};
