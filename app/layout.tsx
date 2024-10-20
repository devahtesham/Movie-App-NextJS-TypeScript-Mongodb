import Header from "@/components/Header";
import "./base.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black h-screen text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
