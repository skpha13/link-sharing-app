const FormItem = ({ labelName, placeholder }) => {
  return (
    <div className="flex flex-row m-2 items-center justify-between w-full">
      <label className="text-slate-700">{labelName}</label>

      <input
        type="text"
        placeholder={placeholder}
        className="rounded-lg p-2 border-2 border-gray-800 outline-none focus:border-violet-800 focus:drop-shadow-lg"
      />
    </div>
  );
};

export default FormItem;
