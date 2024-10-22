import Navbar from "../components/NavBar";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={'${inter.classname}'}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}