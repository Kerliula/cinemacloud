import { moviesList } from "@/lib/constants";
import ListPage from "@/components/ui/ListPage";

const SeriesListPage = () => {
  return <ListPage title="Series" itemsList={moviesList} />;
};

export default SeriesListPage;
