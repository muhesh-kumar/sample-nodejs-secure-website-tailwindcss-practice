const InputElement = ({
  labelContenet,
  inputIcon,
  inputType,
  placeholderText,
}) => {
  return (
    <div className="w-3/4 font-medium">
      <label
        htmlFor="website-admin"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {labelContenet}
      </label>
      <div className="flex">
        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          {inputIcon}
        </span>
        <input
          type={inputType}
          id="website-admin"
          className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholderText}
        />
      </div>
    </div>
  );
};

export default InputElement;
