import type { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <article className="prose lg:prose-xl container mx-auto p-4">
      {children}
    </article>
  );
};

export default Layout;
