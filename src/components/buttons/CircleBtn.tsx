type Props = {
  icon: any;
  additionalClassForCirBtn?: string;
  handleClickEvent?: React.MouseEventHandler<HTMLButtonElement>;
};

function CircleBtn({
  icon,
  additionalClassForCirBtn,
  handleClickEvent,
}: Props) {
  return (
    <button
      type="button"
      onClick={handleClickEvent}
      className={`${additionalClassForCirBtn} flex items-center justify-center mr-1 transition-all duration-200 ease-in-out scale-90 rounded-full cursor-pointer  aspect-square bg-dark-blue  active:scale-75 hover:shadow-lg hover:text-white text-white group h-[44.45px] w-[44.45px]`}
    >
      {icon}
    </button>
  );
}

export default CircleBtn;
