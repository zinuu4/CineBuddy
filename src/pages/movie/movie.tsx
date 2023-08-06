import { ActorsList } from "./ui/actors-list";
import { FactsList } from "./ui/facts-list";
import { SameMoviesList } from "./ui/same-movies-list";

export default function Movie() {
  return (
    <>
      <SameMoviesList />
      <ActorsList />
      <FactsList />
    </>
  );
}
