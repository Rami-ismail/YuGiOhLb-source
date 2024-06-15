// src/components/ExampleComponent.tsx

import React, { useState, useEffect } from "react";
import CardFilters, { buildQuery } from "../common/CardFilterBuilder";
import { fetchCards } from "../api-service/fetchCards";
import { CardList } from "../models/CardList";
import Loader from "./Loader";

export const CardSearcher = () => {
  //this needs to change to a typescript class/interface to be decoded later
  const [data, setData] = useState<CardList>();
  const [filter, setFilters] = useState<CardFilters>();
  //should streamline this keep it like this for now
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const responseData = await fetchCards(buildQuery(filter));
        setIsLoading(false);
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    filter && fetchData();
  }, [filter]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let newFilter = { ...filter, [name]: value };
    setFilters(newFilter);
  };
  return (
    <div>
      <h1>Data with Filters</h1>
      <div>
        <input
          type="text"
          name="fname"
          value={filter?.fname}
          onChange={handleChange}
          placeholder="Card Name"
        />
        <input
          type="text"
          name="type"
          value={filter?.type}
          onChange={handleChange}
          placeholder="Card Type (comma separated)"
        />
        <input
          type="number"
          name="atk"
          value={filter?.atk}
          onChange={handleChange}
          placeholder="ATK"
        />
      </div>
      {!isLoading && (
        <ul>
          {data?.data?.map((item, index) => (
            <li style={{ color: "white" }} key={index}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
      {isLoading && <Loader />}
    </div>
  );
};
