import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check, Star } from "lucide-react";
import Phone from "@/components/Phone";
import { Icons } from "@/components/icons";

export default function Home() {
  return (
    <div className="bg-slate-50">
		<section>
			<MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 
			xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
				<div className="col-span-2 px-6 lg:px-0 lg:pt-4">
					<div className="relative mx-auto text-center lg:text-left flex flex-col items-center
					lg:items-start">
						<div className="absolute w-28 left-0 -top-20 hidden lg:block">
							<img src="/snake-1.png" className="w-full"></img>
						</div>
						<h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold 
						!leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
							Your Image On A 
							<span className="bg-green-600 px-2 mx-2 text-white rounded">Custom</span> 
							Phone Case
						</h1>
						<p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left 
						text-balance md:text-wrap">
							Capture your favorite moments with your own, 
							<span className="font-semibold"> one-of-one </span> 
							phone case. CaseCobra allows you to protect your memories, not just your 
							phone.
						</p>

						<ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center
						sm:items-start">
							<div className="space-y-2">
								<li className="flex gap-1.5 items-center text-left">
									<Check className="h-5 w-5 shrink-0 text-green-600"/>
									High-quality, durable material
								</li>
								<li className="flex gap-1.5 items-center text-left">
									<Check className="h-5 w-5 shrink-0 text-green-600"/>
									5 year print guarantee
								</li>
								<li className="flex gap-1.5 items-center text-left">
									<Check className="h-5 w-5 shrink-0 text-green-600"/>
									Modern iPhone models supported
								</li>
							</div>
						</ul>

						<div className="mt-12 flex flex-col sm:flex-row items-center
						sm:items-start gap-5">
							<div className="flex -space-x-4">
								<img 
									className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-2"
									src='/users/user-1.png'
									alt='User image'
								/>
								<img 
									className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-2"
									src='/users/user-2.png'
									alt='User image'
								/>
								<img 
									className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-2"
									src='/users/user-3.png'
									alt='User image'
								/>
								<img 
									className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-2"
									src='/users/user-4.jpg'
									alt='User image'
								/>
								<img 
									className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-2"
									src='/users/user-5.jpg'
									alt='User image'
								/>
							</div>

							<div className="flex flex-col justify-between items-center sm:items-start">
								<div className="flex gap-0.5">
									<Star className="h-4 w-4 text-green-600 fill-green-600" />
									<Star className="h-4 w-4 text-green-600 fill-green-600" />
									<Star className="h-4 w-4 text-green-600 fill-green-600" />
									<Star className="h-4 w-4 text-green-600 fill-green-600" />
									<Star className="h-4 w-4 text-green-600 fill-green-600" />
								</div>
							</div>

							<p><span className="font-semibold">1,250</span> Happy Customers</p>
						</div>
					</div>
				</div>

				<div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0
				lg:mt-20 h-fit">
					<div className="relative md:max-w-xl">
						<img src='/your-image.png' className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden 
						sm:block lg:hidden xl:block"/>
						<img src="/line.png" className="absolute w-20 -left-6 -bottom-6 select-none"></img>
						<Phone className="w-64" imgSrc="/testimonials/1.jpg" />
					</div>
				</div>
			</MaxWidthWrapper>
		</section>

		{ /** Value proposition section */ }
		<section className="bg-slate-100 py-24">
			<MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
				<div className="flex flex-col lg:flex-row items-center gap-3 sm:gap-6">
					<h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl
					md:text-6xl text-gray-900">
						What our 
						<span className="relative px-2">
							customers
							<Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-8 text-green-500"/>
						</span> 
						say
					</h2>
					<img src="/snake-2.png" className="w-24 order-0 lg:order-2"/>
				</div>

				<div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
					<div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
						<div className="flex gap-0.5 mb-2">
							<Star className="h-5 w-5 text-green-600 fill-green-600" />
							<Star className="h-5 w-5 text-green-600 fill-green-600" />
							<Star className="h-5 w-5 text-green-600 fill-green-600" />
							<Star className="h-5 w-5 text-green-600 fill-green-600" />
							<Star className="h-5 w-5 text-green-600 fill-green-600" />
						</div>
					</div>
				</div>
			</MaxWidthWrapper>
		</section>
	</div>
  );
}
