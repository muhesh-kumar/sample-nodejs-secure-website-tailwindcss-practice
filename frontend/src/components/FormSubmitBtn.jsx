const FormSubmitBtn = ({
  textContent,
  subTitleContent,
  subTitleLinkContent,
  subTitleLink,
}) => {
  return (
    <div className="w-3/4 font-medium flex flex-col gap-2">
      <button
        type="submit"
        className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-xl font-semibold border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {textContent}
      </button>
      <span className="text-sm dark:text-white">
        {subTitleContent}{' '}
        <a href={subTitleLink} className="signup hover:text-red">
          {subTitleLinkContent}
        </a>
      </span>
    </div>
  );
};

export default FormSubmitBtn;
