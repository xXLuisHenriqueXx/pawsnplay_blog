import { useState } from "react";
import { Heart, Minus, Plus, ShoppingCart } from "lucide-react";

import Button from "../ui/Button";

import { formatNumber } from "@/utils/formatNumber";
import { formatPrice } from "@/utils/formatPrice";
import type { ShopContentProduct } from "@/static/data/ShopContent";

interface Props {
  data: ShopContentProduct;
}

const ProductCard = ({ data }: Props) => {
  const [count, setCount] = useState<number>(0);

  return (
    <li className="group/card relative h-120 w-full max-w-sm shrink-0 overflow-hidden rounded-4xl p-4 text-background">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={data.image}
        alt={data.name}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-between h-full w-full p-4 bg-foreground/50 backdrop-blur-xl opacity-0 transition-opacity duration-300 group-hover/card:opacity-100">
        <div className="flex flex-row items-center justify-between w-full">
          <p className="text-2xl font-medium">₦ {formatPrice(data.price)}</p>

          <Button>
            <Heart className="transition-colors group-hover/card:fill-background" />
          </Button>
        </div>

        <div className="flex flex-col items-center text-center">
          <h4 className="text-3xl font-bold">{data.name}</h4>
          <p>{data.description}</p>
        </div>

        <div className="flex flex-row items-center gap-x-2">
          <div className="flex flex-row items-center">
            <Button
              className="rounded-r-none"
              onClick={() => setCount(Math.max(0, count - 1))}
              disabled={count === 0}
            >
              <Minus />
            </Button>

            <div className="flex items-center h-12 px-4 bg-background text-primary">
              {formatNumber(count)}
            </div>

            <Button
              className="rounded-l-none"
              onClick={() => setCount(count + 1)}
            >
              <Plus />
            </Button>
          </div>

          <Button>
            <ShoppingCart /> Add to cart
          </Button>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
