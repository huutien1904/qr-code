import React, { useState } from "react";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export type Product = { linkAff: string; title: string };
export type DropDownType = {
  data: Product[];
  title: string;
};
export default function DropDown({ data, title }: DropDownType) {
  const [isActive, setIsActive] = useState(false);

  const [hiddenValue, setHiddenValue] = useState("");

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };
  const handleRedirectAff = (link: string) => {
    // return window.open(link);
  };
  return (
    <div className="container">
      <div className={`dropdown ${isActive ? "active" : ""}`} tabIndex="1" onClick={() => setIsActive(!isActive)}>
        <div className="select" onClick={toggleDropdown} style={{ borderBottom: isActive ? `1px solid` : "none" }}>
          <span>{title}</span>
          <i className="fa">
            <FontAwesomeIcon icon={isActive ? faXmark : faCheck} />
          </i>
        </div>
        <input type="hidden" name="gender" value={hiddenValue} />
        <ul className="dropdown-menu" style={{ display: isActive ? "block" : "none" }}>
          {data?.map((item: Product, index: number) => {
            return (
              <li
                key={index}
                onClick={() => {
                  window.open(item.linkAff);
                }}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
