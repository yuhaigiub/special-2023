import "./globals.css";
import type {Metadata} from "next";

export const metadata: Metadata = {
	title: "Special-2023",
	description: "Send Messages to celebrate with us",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<body>
				{children}
			</body>
		</html>
	);
}
