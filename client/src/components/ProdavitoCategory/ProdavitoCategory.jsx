import { Button } from "@mui/material";
import { useHistory } from "react-router";

const ProdavitoCategory = ({ el }) => {
  const history = useHistory();
  return (
    <Button onClick={() => history.push(`/prodavito/category/${el.id}`)}>
      {el.category_title}
    </Button>
  );
};

export default ProdavitoCategory;
