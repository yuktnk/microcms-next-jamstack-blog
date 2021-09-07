type Heading02Props = { title: string };

const Heading02 = (props: Heading02Props) => {
  return (
    <h2 className="py-2 px-4 text-2xl bg-grayBlue03 text-white  border-b border-baseBlue border-opacity-50">
      {props.title}
    </h2>
  );
};

export default Heading02;
