'use client'
import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import "./ChipComponent.css";

interface Chip {
  id: number;
  label: string;
  imageUrl: string;
}

const ChipComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [chips, setChips] = useState<Chip[]>([]);
  const [show, setShow] = useState(false);
  const [filteredItems, setFilteredItems] = useState<Chip[]>([]);
  const [optionsPosition, setOptionsPosition] = useState({ top: 0, left: 0 });
  const inputRef = useRef<HTMLInputElement>(null);
  const optionsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // Filter items based on input value
    const newFilteredItems: Chip[] = [
      { id: 0, label: "Nick Giannopoulos", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389541/15474343_kt3b4i.png" },
      { id: 1, label: "John Doe", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389541/25862070_kmlr8g.png" },
      { id: 2, label: "Jane Smith", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389541/65900678_gy7pep.png" },
      { id: 3, label: "Captain", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389541/13741561_baroqo.png" },
      { id: 4, label: "Ironman", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389541/16424665_jlgfwd.png" },
      { id: 5, label: "Spiderman", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389541/images_1_ogt32r.png" },
      { id: 6, label: "Xavier", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389540/images_tvsc9o.png" },
      { id: 7, label: "Rodriguez", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389540/68747470733a2f2f7261772e6769746875622e636f6d2f68617368646f672f6e6f64652d6964656e7469636f6e2d6769746875622f6d61737465722f6578616d706c65732f696d616765732f6769746875622e706e67_o4tn4b.png" },
      { id: 8, label: "Jackson", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389540/identicon_hqqtq9.png" },
      { id: 9, label: "Ava White", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389540/identicon_hqqtq9.png" },
      { id: 10, label: "Nguyen", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389540/59449606_wxa987.png" },

      // Add more items with imageUrl
    ].filter(
      (item) => !chips.some((chip) => chip.label === item.label.toLowerCase())
    );

    setFilteredItems(newFilteredItems);
  }, [chips]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    // Update filtered items dynamically as the user types
    const newFilteredItems: Chip[] = [
      { id: 0, label: "Nick Giannopoulos", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389541/15474343_kt3b4i.png" },
      { id: 1, label: "John Doe", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389541/25862070_kmlr8g.png" },
      { id: 2, label: "Jane Smith", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389541/65900678_gy7pep.png" },
      { id: 3, label: "Captain", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389541/13741561_baroqo.png" },
      { id: 4, label: "Ironman", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389541/16424665_jlgfwd.png" },
      { id: 5, label: "Spiderman", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389541/images_1_ogt32r.png" },
      { id: 6, label: "Xavier", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389540/images_tvsc9o.png" },
      { id: 7, label: "Rodriguez", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389540/68747470733a2f2f7261772e6769746875622e636f6d2f68617368646f672f6e6f64652d6964656e7469636f6e2d6769746875622f6d61737465722f6578616d706c65732f696d616765732f6769746875622e706e67_o4tn4b.png" },
      { id: 8, label: "Jackson", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389540/identicon_hqqtq9.png" },
      { id: 9, label: "Ava White", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389540/identicon_hqqtq9.png" },
      { id: 10, label: "Nguyen", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389540/59449606_wxa987.png" },
      // Add more items with imageUrl
    ].filter(
      (item) =>
        !chips.some((chip) => chip.label === item.label.toLowerCase()) &&
        item.label.toLowerCase().includes(event.target.value.toLowerCase())
    );

    setFilteredItems(newFilteredItems);
  };

  const handleInputClick = () => {
    // Show all remaining data when the input is clicked
    const newFilteredItems: Chip[] = [
      { id: 0, label: "Nick Giannopoulos", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389541/15474343_kt3b4i.png" },
      { id: 1, label: "John Doe", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389541/25862070_kmlr8g.png" },
      { id: 2, label: "Jane Smith", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389541/65900678_gy7pep.png" },
      { id: 3, label: "Captain", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389541/13741561_baroqo.png" },
      { id: 4, label: "Ironman", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389541/16424665_jlgfwd.png" },
      { id: 5, label: "Spiderman", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389541/images_1_ogt32r.png" },
      { id: 6, label: "Xavier", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389540/images_tvsc9o.png" },
      { id: 7, label: "Rodriguez", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389540/68747470733a2f2f7261772e6769746875622e636f6d2f68617368646f672f6e6f64652d6964656e7469636f6e2d6769746875622f6d61737465722f6578616d706c65732f696d616765732f6769746875622e706e67_o4tn4b.png" },
      { id: 8, label: "Jackson", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389540/identicon_hqqtq9.png" },
      { id: 9, label: "Ava White", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389540/identicon_hqqtq9.png" },
      { id: 10, label: "Nguyen", imageUrl: "https://res.cloudinary.com/dmlts9lbk/image/upload/v1705389540/59449606_wxa987.png" },
      // Add more items with imageUrl
    ].filter(
      (item) => !chips.some((chip) => chip.label === item.label.toLowerCase())
    );

    // Update options position based on the input position
    if (inputRef.current && optionsRef.current) {
      const inputRect = inputRef.current.getBoundingClientRect();
      setOptionsPosition({
        top: inputRect.bottom + window.scrollY,
        left: inputRect.left + window.scrollX,
      });
    }

    setFilteredItems(newFilteredItems);
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && inputValue === "") {
      // Handle backspace when input is empty
      removeLastChip();
    }
  };

  const handleItemClick = (item: Chip) => {
    const newChip: Chip = {
      id: chips.length + 1,
      label: item.label.toLowerCase(),
      imageUrl: item.imageUrl,
    };

    setChips([newChip, ...chips]); // Place the selected chip at the top
    setInputValue("");
    inputRef.current?.focus();
  };

  const handleChipRemove = (chipId: number) => {
    setChips(chips.filter((chip) => chip.id !== chipId));
  };

  const removeLastChip = () => {
    if (chips.length > 0) {
      const lastChip = chips[chips.length - 1];
      handleChipRemove(lastChip.id);
    }
  };

  return (
    <div className="chip-container">
      <div className="sun-chip-container">
        <div className="chips">
          {chips.map((chip) => (
            <div key={chip.id} className="chip">
              <img src={chip.imageUrl} alt={chip.label} className="chip-image" />
              <span className="chip-label">{chip.label}</span>
              <span
                className="remove-icon"
                onClick={() => handleChipRemove(chip.id)}
              >
                X
              </span>
            </div>
          ))}
          <input
            ref={inputRef}
            className="focus:outline-none"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onClick={handleInputClick}
            onKeyDown={handleInputKeyDown}
            placeholder="Type here..."
            onFocus={() => setShow(true)}
            // onBlur={() => setShow(false)}
          />
        </div>
        {show && (
          <ul
            className="mx-0 my-2 h-32 overflow-auto "
            ref={optionsRef}
            style={{
              top: optionsPosition.top + "px",
              left: optionsPosition.left + "px",
            }}
          >
            {filteredItems.map((item) => (
              <li className="flex items-center gap-x-2 gap-y-2 hover:bg-black/10 cursor-pointer px-2 py-1" key={item.id} onClick={() => handleItemClick(item)}>
                <img src={item.imageUrl} alt={item.label} className="option-image" />
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ChipComponent;
