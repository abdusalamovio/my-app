import Navigation from "./naviganion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export function Header() {
  return (
    <header>
      <Navigation navLinks={navItems} />
    </header>
  );
}
