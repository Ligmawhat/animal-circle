import { useHistory } from "react-router";

const ProdavitoCategory = ({ el }) => {
  const history = useHistory();
  return (
      <li  onClick={() => history.push(`/prodavito/category/${el?.id}`)}>
          <span>{el?.category_title}</span>
      </li>

  );
};

export default ProdavitoCategory;
