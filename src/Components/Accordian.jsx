import ListItem from "./ListItem";

const Accordian = ({ title, open, setOpen }) => {
  // the controlled of the component

  const showItem = () => {
    setOpen();
  };

  return (
    <>
      <div className="px-4 py-2 border  w-64             border-gray-200   shadow-md          my-1">
        <div className="flex  justify-between  ">
          <h1>{title}</h1>
          <button
            onClick={showItem}
            className="bg-black text-white px-2  rounded-md"
          >
            show
          </button>
        </div>

        {open && <ListItem />}
      </div>
    </>
  );
};

export default Accordian;
