import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { firestoreFetchDetail } from "./Utils/fetchFirestore";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    firestoreFetchDetail(id)
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

  return <ItemDetail item={data} />;
};

export default ItemDetailContainer;
