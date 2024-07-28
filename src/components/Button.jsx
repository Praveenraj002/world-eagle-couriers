/* eslint-disable react/prop-types */
const Button = (props) => {
    return (
      <>
        <button className="bg-lightGray border-lightGray text-black font-semibold py-2 px-4 rounded-sm hover:bg-gray-400 transition duration-300 ease-in-out">
          {props.children}
        </button>
      </>
    );
  };
  
  export default Button;