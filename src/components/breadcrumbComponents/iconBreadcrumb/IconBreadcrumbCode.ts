export const IconBreadcrumbCode = `
import React from "react";
import { MdHome } from "react-icons/md";
import { RxCaretRight } from "react-icons/rx";
import { Link } from "react-router-dom";

// Utility function to format path segments
const formatSegment = (segment) => {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const IconBreadcrumb = ({ path }) => {
  const pathSegments = path.split("/").filter(Boolean);

  return (
    <div className="flex items-center text-sm text-gray-600">
      <Link
        to="/"
        className="hover:text-primary/50 text-primary transition-all ease-in-out duration-500 capitalize"
      >
        <MdHome className="text-lg" />
      </Link>
      {pathSegments.length > 0 && (
        <span className="mx-2 text-primary">
          <RxCaretRight className="text-lg" />
        </span>
      )}
      {pathSegments.map((segment, index) => (
        <React.Fragment key={index}>
          <Link
            to={\`/\${pathSegments.slice(0, index + 1).join("/")}\`}
            className="hover:text-primary/50 text-primary transition-all ease-in-out duration-500 capitalize"
          >
             {formatSegment(segment)}
          </Link>
          {index < pathSegments.length - 1 && (
            <span className="mx-2 text-primary">
              <RxCaretRight className="text-lg" />
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default IconBreadcrumb;
`;
