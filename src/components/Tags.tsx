// Tag.tsx
export const Tag = () => {
  const items = ["digital marketing", "designing", "development"];

  return (
    <div className="absolute flex flex-row justify-center items-center gap-10 -rotate-90 origin-left top-148  max-sm:top-150 max-sm:left-8 max-md:left-15 max-md:top-170 left-18">
      {items.map((label) => (
        <span
          key={label}
          className="font-roboto font-normal text-sm leading-4 animate-fade-in tracking-md uppercase text-white  hover:text-orange-500 transition-colors whitespace-nowrap"
        >
          {label}
        </span>
      ))}
    </div>
  );
};
