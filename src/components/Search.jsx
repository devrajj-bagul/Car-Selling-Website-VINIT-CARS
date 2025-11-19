import React, { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "./ui/separator";
import { TbSettingsSearch } from "react-icons/tb";
import Data from "@/Shared/Data";
import { Link } from "react-router-dom";

const Search = () => {
  const [cars, setCars] = useState();
  const [make, setMake] = useState();
  const [price, setPrice] = useState();

  return (
    <div
      className="
      p-3 bg-white rounded-md 
      flex flex-col gap-4 w-full 
      md:w-[60%] md:flex-row md:rounded-full md:p-5 md:items-center
      "
    >
      {/* Cars */}
      <Select onValueChange={(value) => setCars(value)}>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-md md:text-lg">
          <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="New">New</SelectItem>
            <SelectItem value="Used">Used</SelectItem>
            {/* <SelectItem value="Certified pre-Owned">
              Certified pre-Owned
            </SelectItem> */}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className="hidden md:block" />

      {/* Make */}
      <Select onValueChange={(value) => setMake(value)}>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-md md:text-lg">
          <SelectValue placeholder="Car Makes" />
        </SelectTrigger>
        <SelectContent>
          {Data.CarMakes.map((maker, index) => (
            <SelectItem key={index} value={maker.name}>
              {maker.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className="hidden md:block" />

      {/* Pricing */}
      <Select onValueChange={(value) => setPrice(value)}>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-md md:text-lg">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
          {Data.Pricing.map((p, index) => (
            <SelectItem key={index} value={p.amount}>
              ₹{p.amount}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Search Button */}
      <Link to={`/search?cars=${cars}&make=${make}&price=${price}`}>
        {/* Desktop Icon */}
        <TbSettingsSearch
          className="
            hidden md:block text-[50px] bg-primary p-3 rounded-full 
            text-white hover:scale-105 transition-all cursor-pointer
          "
        />

        {/* Mobile Search Button */}
        <button
          className="
            md:hidden bg-primary text-white 
            font-semibold w-full p-3 rounded-md text-center 
            hover:bg-indigo-600 transition
          "
        >
          Search
        </button>
      </Link>
    </div>
  );
};

export default Search;
