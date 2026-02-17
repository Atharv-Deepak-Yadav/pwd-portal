const TitleBar = ({ title }) => {
  return (
    <div
      className="fixed top-0 left-60 right-0 h-8 z-20 flex items-center px-4 bg-gray-100"
      style={{ WebkitAppRegion: "drag" }}
    >
      <span className="text-[11px] text-gray-400 font-medium select-none">
        {title}
      </span>
    </div>
  );
};

export default TitleBar;
