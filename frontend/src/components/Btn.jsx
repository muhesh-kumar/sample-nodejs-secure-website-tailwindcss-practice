const Btn = ({ btnTextContent, redirectURL }) => {
  return (
    <div>
      <a href={redirectURL}>
        <button class="bg-zinc-500 hover:bg-zinc-400 text-white font-semibold py-2 px-4 border border-zinc-500 rounded-lg shadow text-xl">
          {btnTextContent}
        </button>
      </a>
    </div>
  );
};

export default Btn;
