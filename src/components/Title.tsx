type Props = {
  title: string;
};

export const Title = ({ title }: Props) => {
  return <h2 className="text-xl font-medium">{title}</h2>;
};
