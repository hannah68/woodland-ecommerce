import { Product } from "../types";
import Image from "next/image";

export const ProductItem = ({ item }: { item: Product }) => {
	return (
		<div className="flex flex-col text-xl">
			<Image
				className="w-[318px] h-[220px] mb-4"
				src={item.img}
				alt={item.title}
				width={800}
				height={300}
			/>
			<p className="mb-4">{item.title}</p>
			<div className="product__stars">
				<div className="flex justify-between mb-6">
					{/* {starIcons.map((star, index) => {
						return <span key={index}>{star}</span>;
					})}
					<span>{getRating(item.rating)}</span> */}
				</div>
				<p className="product__price">£{item.price}</p>
			</div>
			{/* text-base no-underline bg-[#edeaea] text-black py-4 px-6 cursor-pointer text-center shadow-sm border border-gray-400 */}
			{/* <Link
				className="product__btn"
				to={`${PAGE_LINK.SHOP}/${item._id}`}
				state={{ item }}
			>
				More details
			</Link> */}
		</div>
	);
};
