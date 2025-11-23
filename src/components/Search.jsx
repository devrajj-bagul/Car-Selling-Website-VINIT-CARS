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
  // Only used cars
  const [cars] = useState("Used");
  const [make, setMake] = useState("");

  return (
    <div
      className="
      p-3 bg-white rounded-md 
      flex flex-col gap-4 w-full 
      md:w-[60%] md:flex-row md:rounded-full md:p-5 md:items-center
      "
    >
      {/* Cars (Fixed to USED) */}
      <div className="w-full  text-md md:text-lg font-semibold text-gray-700 pl-5">
        Used Cars
      </div>

      <Separator orientation="vertical" className="hidden md:block" />

      {/* Make */}
      <Select onValueChange={(value) => setMake(value)}>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-md md:text-lg">
          <SelectValue placeholder="Car Makes" />
        </SelectTrigger>

        {/* Scrollable */}
        <SelectContent className="max-h-60 overflow-y-auto">
          {Data.CarMakes.map((maker, index) => (
            <SelectItem key={index} value={maker.name}>
              {maker.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Search Button – always active */}
      <Link to={`/search?cars=${cars}&make=${make || ""}`}>
        <TbSettingsSearch
          className="
            hidden md:block text-[50px] bg-primary p-3 rounded-full 
            text-white hover:scale-105 transition-all cursor-pointer
          "
        />
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
