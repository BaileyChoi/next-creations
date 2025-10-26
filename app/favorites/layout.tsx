export const metadata = {
  title: "Favorites",
};

export default function FavoritesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      &copy; Next JS is great!!!
    </div>
  );
}
