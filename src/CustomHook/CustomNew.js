import { useContext } from "react";
import { newsContext } from "../Context/News";

function NewCustom() {
  const { news, setNews } = useContext(newsContext);
  return { news, setNews };
}

export default NewCustom;
