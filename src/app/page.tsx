import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <div className="bg-slate-50 text-black bg-white">
		<section>
			<MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
				<div className="col-span-2 px-6 lg:px-0 lg:pt-4">
					<div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
						<div className="absolute w-28 left-0 top-0 hidden lg:block">
							<img src="/snake-1.png" className="w-full"></img>
						</div>
						<h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
							Your Image On A <span className="bg-green-600 px-2 text-white rounded">Custom</span> Phone Case
						</h1>
						<p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
							Capture your favorite moments with your own, 
							<span className="font-semibold"> one-of-one </span> 
							phone case. CaseCobra allows you to protect your memories, not just your phone.
						</p>
					</div>
				</div>
			</MaxWidthWrapper>
		</section>
	</div>
  );
}
