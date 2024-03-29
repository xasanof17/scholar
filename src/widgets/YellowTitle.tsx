import React from "react";

const YellowTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <div className="mb-16 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-medium sm:text-4xl">
        {subtitle ? subtitle : "Our"}{" "}
        <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-2 before:bg-yellow">
          <b className="relative">{title}</b>
        </span>
      </h2>
    </div>
  );
};

export default YellowTitle;
