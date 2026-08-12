import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import Section from "../ui/Section";
import Input from "../ui/Input";
import Filters from "./Filters";
import ProductList from "./ProductList";

import { SHOP_CONTENT } from "@/static/data/ShopContent";

const Shop = () => {
  const { filters, products } = SHOP_CONTENT;

  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState<string>("");

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        !normalizedSearch ||
        product.name.toLowerCase().includes(normalizedSearch);

      const matchesCategory =
        activeFilter === "all" || product.categories.includes(activeFilter);

      return matchesSearch && matchesCategory;
    });
  }, [products, search, activeFilter]);

  return (
    <Section id="shop" className="max-w-7xl mx-auto">
      <div className="flex flex-row items-center gap-x-1 w-full max-w-xl mx-auto border border-border focus-within:border-foreground rounded-2xl overflow-hidden transition-colors duration-300">
        <div className="flex items-center justify-center w-16 h-12 bg-foreground text-background">
          <Search className="size-4" />
        </div>

        <Input
          className="border-0"
          type="search"
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Filters
        items={filters}
        active={activeFilter}
        setActive={setActiveFilter}
      />

      <ProductList items={filteredProducts} />
    </Section>
  );
};

export default Shop;
