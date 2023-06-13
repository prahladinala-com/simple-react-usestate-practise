
function NavLink({title, results}) {
  return (
    <li>
      <button
        onClick={results}
        className="text-sm font-semibold text-gray-800 hover:text-gray-900"
      >
        {title}
      </button>
    </li>
  );
}

export default NavLink;