import React, { useState } from "react";
import Accordian from "./Accordian";

const Men = () => {
  //  tjis is called the lifting up where we use state of the child and it passes to the parent
  const [open, setOpen] = useState(0);
  return (
    <>
      <div className="mx-auto max-w-6xl mt-10 ">
        <h1 className="mb-5 text-xl font-bold">Filter option</h1>

        {["Brand", "Men", "Women", "kids"].map((title, index) => (
          <Accordian
            title={title}
            open={index === open ? true : false}
            setOpen={() => setOpen(index)}
          />
        ))}
      </div>
    </>
  );
};

export default Men;
