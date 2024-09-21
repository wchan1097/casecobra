import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";

const NavBar = () => {
	const user = undefined;
	const isAdmin = false;

	return (
		<nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b 
		border-gray-200 bg-white/25 backdrop-blur-lg transition-all text-black">
			<MaxWidthWrapper>
				<div className="flex h-14 items-center justify-between border-b
				border-zinc-200">
					<Link href="/" className="flex z-40 font-semibold">
						case<span className="text-green-600">cobra</span>
					</Link>

					<div className="h-full flex items-center space-x-4">
						{user ? (
							<>
								<Link 
									href="/api/auth/logout" 
									className={buttonVariants({
										size: "sm", 
										variant: "ghost"
									})}
								>
									Sign Out
								</Link>
								{ isAdmin ? (
									<Link 
										href="/api/auth/logout" 
										className={buttonVariants({
											size: "sm", 
											variant: "ghost"
										})}>
										Sign Out
									</Link>
								) : null}
							</>
						) : (
							<></>
						)}
					</div>
				</div>
			</MaxWidthWrapper>
		</nav>
	)
}

export default NavBar;