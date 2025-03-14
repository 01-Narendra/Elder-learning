// Component for navigation links
function NavLink({ href, text }: { href: string; text: string }) {
    return (
      <a
        href={href}
        className="hover:text-black text-gray-500 text-xl font-khand font-semibold"
      >
        {text}
      </a>
    );
  }
  
  // Component for mobile navigation links
  function MobileNavLink({ href, text }: { href: string; text: string }) {
    return (
      <a
        href={href}
        className="block px-3 py-2 rounded-md text-base font-medium text-white shadow-sm shadow-blue-500 p-4 bg-blue-700 dark:text-gray-300 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        {text}
      </a>
    );
  }

  export {NavLink, MobileNavLink}