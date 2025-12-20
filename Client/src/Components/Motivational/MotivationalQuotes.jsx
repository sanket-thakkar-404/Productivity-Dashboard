const MotivationalQuotes = ({ text, author }) => {
  return (
    <div className=" max-w-3xl text-center text-white tracking-wide">
      <p className="text-4xl leading-relaxed">
        {text}
      </p>
      <p className="mt-30 text-lg opacity-80">
        — {author}
      </p>
    </div>
  );
};

export default MotivationalQuotes;