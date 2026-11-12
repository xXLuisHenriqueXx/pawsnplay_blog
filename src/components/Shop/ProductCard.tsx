import { useEffect, useRef, useState } from "react";
import { Heart, Minus, Plus, ShoppingCart } from "lucide-react";

import Button from "../ui/Button";

import { cn } from "@/lib/utils";
import { formatNumber } from "@/utils/formatNumber";
import { formatPrice } from "@/utils/formatPrice";
import type { ShopContentProduct } from "@/static/data/ShopContent";

interface Props {
  data: ShopContentProduct;
}

const ProductCard = ({ data }: Props) => {
  const [count, setCount] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const cardRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDownOutside = (event: PointerEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDownOutside);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDownOutside);
    };
  }, [isOpen]);

  return (
    <li
      ref={cardRef}
      onClick={() => setIsOpen((prev) => !prev)}
      onMouseLeave={() => setIsOpen(false)}
      className="group/card relative h-120 w-full max-w-sm shrink-0 cursor-pointer overflow-hidden rounded-4xl p-4 text-background"
    >
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={data.image}
        alt={data.name}
        width={384}
        height={480}
        loading="lazy"
        decoding="async"
      />

      <div
        className={cn(
          "pointer-events-none absolute inset-0 flex h-full w-full flex-col items-center justify-between bg-foreground/50 p-4 opacity-0 backdrop-blur-xl transition-opacity duration-300 group-hover/card:pointer-events-auto group-hover/card:opacity-100",
          isOpen && "pointer-events-auto opacity-100",
        )}
      >
        <div className="flex flex-row items-center justify-between w-full">
          <p className="text-2xl font-medium">₦ {formatPrice(data.price)}</p>

          <Button
            onClick={(e) => e.stopPropagation()}
            aria-label={`Add ${data.name} to wishlist`}
          >
            <Heart
              className={cn(
                "transition-colors group-hover/card:fill-background",
                isOpen && "fill-background",
              )}
            />
          </Button>
        </div>

        <div className="flex flex-col items-center text-center">
          <h3 className="text-3xl font-bold">{data.name}</h3>
          <p>{data.description}</p>
        </div>

        <div
          className="flex flex-row items-center gap-x-2"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-row items-center">
            <Button
              className="rounded-r-none"
              onClick={() => setCount(Math.max(0, count - 1))}
              disabled={count === 0}
              aria-label={`Decrease quantity of ${data.name}`}
            >
              <Minus />
            </Button>

            <div
              className="flex items-center h-12 px-4 bg-background text-primary"
              aria-label={`Current quantity: ${count}`}
            >
              {formatNumber(count)}
            </div>

            <Button
              className="rounded-l-none"
              onClick={() => setCount(count + 1)}
              aria-label={`Increase quantity of ${data.name}`}
            >
              <Plus />
            </Button>
          </div>

          <Button aria-label={`Add ${data.name} to cart`}>
            <ShoppingCart /> Add to cart
          </Button>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
