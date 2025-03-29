type Props = {
  text?: string | undefined;
  icon?: any;
  btnClass?: string;
};

function ActionBtn({ icon, text, btnClass }: Props) {
  return (
    <div className="actionBtnBox flex justify-center flex-1 ">
      <button
        className={`flex justify-center gap-2 bg-dark-blue transition-all duration-200 ease-in-out rounded-full cursor-pointer  active:scale-90 px-4 py-3 hover:shadow-lg group min-w-[180px] ${btnClass}`}
      >
        {icon && <>{icon}</>}
        <span className="text-white">{text}</span>
      </button>
    </div>
  );
}

export default ActionBtn;
