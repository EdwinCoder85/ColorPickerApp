import { useEffect, useState } from "react";

function ColorPicker() {
  const getColor = () => {
    const selectedColor = localStorage.getItem("color");
    if (selectedColor) {
      return selectedColor;
    } else {
      return "#FFFFFF";
    }
  };

  const getBorder = () => {
    const selectedBorder = localStorage.getItem("border");
    if (selectedBorder) {
      return selectedBorder;
    } else {
      return "#000000";
    }
  };

  const getBackground = () => {
    const selectedBackground = localStorage.getItem("background");
    if (selectedBackground) {
      return selectedBackground;
    } else {
      return "#cccccc";
    }
  };

  const [color, setColor] = useState(getColor());
  const [border, setBorder] = useState(getBorder());
  const [background, setBackground] = useState(getBackground());

  document.body.style.backgroundColor = background;

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  function handleBorderChange(event) {
    setBorder(event.target.value);
  }

  function handleBackgroundChange(event) {
    setBackground(event.target.value);
  }

  useEffect(() => {
    localStorage.setItem("color", color);
    localStorage.setItem("border", border);
    localStorage.setItem("background", background);
  }, [color, border, background]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="m-10 text-5xl">Color Picker</h1>
      <div
        className="w-80 h-80 flex flex-col justify-center items-center border-solid border-8 rounded-3xl duration-700 ease-linear"
        style={{ backgroundColor: color, borderColor: border }}
      >
        <p className="text-gray-500 text-lg font-bold text-center">
          Selected Color: {color}
        </p>
        <p className="text-gray-500 text-lg font-bold text-center">
          Selected Border: {border}
        </p>
        <p className="text-gray-500 text-lg font-bold text-center">
          Selected Background: {background}
        </p>
      </div>
      <div className="flex flex-row gap-4 justify-center items-center m-8">
        <div className="flex flex-col items-center justify-center">
          <label className="text-2xl font-bold mb-2.5">Select a color:</label>
          <input
            className="w-16 h-12 p-1.5 rounded-xl border-solid border-2 border-gray-400"
            type="color"
            value={color}
            onChange={handleColorChange}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <label className="text-2xl font-bold mb-2.5">Select a border:</label>
          <input
            className="w-16 h-12 p-1.5 rounded-xl border-solid border-2 border-gray-400"
            type="color"
            value={border}
            onChange={handleBorderChange}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <label className="text-2xl font-bold mb-2.5 ">
            Select a background:
          </label>
          <input
            className="w-16 h-12 p-1.5 rounded-xl border-solid border-2 border-gray-400"
            type="color"
            value={background}
            onChange={handleBackgroundChange}
          />
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;
