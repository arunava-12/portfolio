type Props = {
  title: string;
  className?: string;
};

const Badge: React.FC<Props> = ({ title, className = "" }) => {
  return (
    <p
      className={
        "font-serif text-black p-1 rounded-lg inline-block bg-background text-sm " +
        className
      }
    >
      {title}
    </p>
  );
};

export default Badge;
