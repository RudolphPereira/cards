type Props = {
  title: string;
  htmlFor?: string;
};

export const InputLabel = ({ title, htmlFor }: Props) => {
  return (
    <label className="text-xl font-medium" htmlFor={htmlFor}>
      {title}
    </label>
  );
};
