import { useContext } from "react";
import { searchContext } from "../Context/ContextSearch";

function CustomContext() {
  const { search, setSearch } = useContext(searchContext);
  return { search, setSearch };
}

export default CustomContext;
