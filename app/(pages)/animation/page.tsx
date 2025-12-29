import { moviesList } from "@/lib/constants";
import ListPage from "@/components/ui/ListPage";

const AnimationListPage = () => {
  return <ListPage title="Animation" itemsList={moviesList} />;
};

export default AnimationListPage;
