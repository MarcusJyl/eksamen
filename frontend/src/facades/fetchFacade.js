import { handleHttpErrors, makeOptions } from "./fetchUtils";
import { bookURL as url } from "./settings";

function BookFetcher() {
  const fetchData = () => {
    const options = makeOptions("GET", true);
    return fetch(url + "all", options).then(handleHttpErrors);
  };
  return { fetchData };
}
const facade = BookFetcher();
export default facade;
