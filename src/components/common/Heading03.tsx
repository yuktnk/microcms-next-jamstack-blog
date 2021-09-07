type Heading03Type = { title: string }
const Heading03 = (props: Heading03Type) => {
  return (
    <h2 className="py-2 px-4 text-l bg-grayBlue03 text-white border-b border-baseBlue border-opacity-50">
      {props.title}
    </h2>
  );
};

export default Heading03;
