import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList";
// Firebase
import { firestoreFetch } from "./Utils/fetchFirestore";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  //componentDidUpdate
  useEffect(() => {
    firestoreFetch(id)
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, [id]);

  //componentWillUnmount
  useEffect(() => {
    return () => {
      setData([]);
    };
  }, []);
  //
  return <ItemList item={data} />;
};

export default ItemListContainer;
