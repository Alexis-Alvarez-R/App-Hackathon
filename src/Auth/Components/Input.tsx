interface props {
  type: string;
  placeholder: string;
  name: string;
  icon: string;
}

export default function Input({ type, placeholder, name, icon }: props) {
  return (
    <label
      htmlFor=""
      className="w-full p-2 flex items-center gap-2 bg-white [border:solid_black_1px] rounded-2xl"
    >
      <figure className="h-6 w-[8%] flex justify-center items-center">
        <img src={icon} alt="" className="h-full" />
      </figure>
      <input
        className="w-[80%] p-1"
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </label>
  );
}
