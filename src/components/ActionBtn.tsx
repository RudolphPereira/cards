type Props = {
  text?: string | undefined;
  icon?: string | undefined;
};

function ActionBtn({ icon, text }: Props) {
  return (
    <div className="actionBtnBox flex justify-center flex-1">
      <button className="flex gap-2 bg-blue-400 transition-all duration-200 ease-in-out rounded-full cursor-pointer  hover:bg-blue-500 active:scale-90 px-4 py-3 hover:shadow-lg">
        {icon && <img src={icon} alt="" />}
        <span className="text-white">{text}</span>
      </button>
    </div>
  );
}

export default ActionBtn;
