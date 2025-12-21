const FormField = ({
  label,
  type = "text",
  value,
  defaultValue,
  children,
}) => {
  return (
    <div className="mb-6">
      <label className="block text-sm text-gray-400 mb-2">
        {label}
      </label>

      {children ? (
        children
      ) : (
        <input
          type={type}
          defaultValue={defaultValue}
          value={value}
          className="bg-[#f9fafc] w-full px-5 py-3 rounded-xl"
        />
      )}
    </div>
  );
};

export default FormField;