export default function Tag({
  children,
  color,
  icon,
  title = "",
}: {
  children: React.ReactNode;
  color: string;
  title?: string;
  icon?: React.ReactNode;
}) {
  return (
    <p
      title={title}
      className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium items-center border`}
      style={{
        // backgroundColor: color,

        color: color,
        borderColor: color,
      }}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </p>
  );
}
