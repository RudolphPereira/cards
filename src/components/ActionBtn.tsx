type Props = {
  text?: string | undefined;
  icon?: string | undefined;
};

function ActionBtn({ icon, text }: Props) {
  return (
    <div className="actionBtnBox flex justify-center flex-1 ">
      <button className="flex gap-2 bg-dark-blue transition-all duration-200 ease-in-out rounded-full cursor-pointer  hover:bg-mid-blue active:scale-90 px-4 py-3 hover:shadow-lg group">
        {icon && (
          <img
            src={icon}
            alt=""
            className=" transition-all duration-300 ease-in-out group-hover:rotate-90"
          />
        )}
        <span className="text-white">{text}</span>
      </button>
    </div>
  );
}

export default ActionBtn;
