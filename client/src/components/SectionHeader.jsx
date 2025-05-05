const SectionHeader = ({ title, heading, subheading }) => {
  return (
    <div className="text-center space-y-4">
      <p className="py-1 px-3 bg-[#749B3F1A] rounded-lg text-xl font-medium text-[#749B3F] w-[15%] mx-auto">
        {title}
      </p>
      <h2 className="text-[#212337] font-medium text-5xl">{heading}</h2>
      <p className="text-[#4A4A52] text-sm">{subheading}</p>
    </div>
  );
};

export default SectionHeader;
