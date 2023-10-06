import SessionProvider from "@/components/SessionProvider";
import Navbar from "@/components/Navbar";

const GuestLayout = ({children}: {children: React.ReactNode}) => {
	return (
		<>
			<div className="main">
				<div className="gradient" />
			</div>
			<SessionProvider>
				<main className="app">
					<Navbar />
					{children}
				</main>
			</SessionProvider>
		</>
	);
};
export default GuestLayout;
