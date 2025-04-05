const Button = ({
  bgColor,
  fontColor,
  title,
  mt,
  hoverBgColor,
  hoverForegroundColor,
  borderColor,
}) => {
  return (
    <div>
      <button
        className={`${bgColor} ${fontColor} text-1xl rounded-full px-5 py-2 font-overpass font-[600] ${mt} border-[1px] ${hoverBgColor} ${hoverForegroundColor} ${borderColor} transition-all duration-300`}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
