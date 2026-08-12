import ProductCard from "./ProductCard";
import Empty from "./Empty";

import type { ShopContentProduct } from "@/static/data/ShopContent";

interface Props {
  items: ShopContentProduct[];
}

const ProductList = ({ items }: Props) => {
  return (
    <>
      {items.length ? (
        <ul className="flex flex-row items-center justify-start gap-x-4 w-full overflow-x-auto">
          {items.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </ul>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default ProductList;
