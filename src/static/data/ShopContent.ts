import Multivitamin from "@/assets/shop/multivitamin_cat.png";
import CatFood from "@/assets/shop/cat_food.png";
import DogFood from "@/assets/shop/dog_food.png";
import PetPlate from "@/assets/shop/pet_plate.png";
import BirdWater from "@/assets/shop/bird_water.png";
import DogWater from "@/assets/shop/dog_water.png";
import FishFood from "@/assets/shop/fish_food.png";
import BirdFood from "@/assets/shop/bird_food.png";
import FishAquarium from "@/assets/shop/fish_aquarium.png";
import CatToy from "@/assets/shop/cat_toy.png";
import DogLeash from "@/assets/shop/dog_leash.jpg";
import CatScratchingPost from "@/assets/shop/cat_scratching_post.jpg";
import BirdCage from "@/assets/shop/bird_cage.jpg";
import KittenCatFood from "@/assets/shop/kitten_cat_food.png";
import PuppyDogShampoo from "@/assets/shop/puppy_dog_shampoo.jpg";
import CatCollar from "@/assets/shop/cat_collar.jpg";
import DogTrainingPads from "@/assets/shop/dog_training_pads.jpg";
import FishTankGravel from "@/assets/shop/fish_tank_gravel.jpg";
import BirdPerch from "@/assets/shop/bird_perch.jpg";
import DogChewToy from "@/assets/shop/dog_chew_toy.jpg";

export interface ShopContentFilter {
  id: string;
  label: string;
}
export interface ShopContentProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  categories: string;
}
interface ShopContent {
  filters: ShopContentFilter[];
  products: ShopContentProduct[];
}

export const SHOP_CONTENT: ShopContent = {
  filters: [
    {
      id: "all",
      label: "All",
    },
    {
      id: "cat",
      label: "Cat",
    },
    {
      id: "dog",
      label: "Dog",
    },
    {
      id: "fish",
      label: "Fish",
    },
    {
      id: "bird",
      label: "Bird",
    },
  ],
  products: [
    {
      id: "product-1",
      name: "Multivitamin For Cat",
      description:
        "A daily supplement to support your cat’s overall health and vitality.",
      price: 18,
      image: Multivitamin,
      categories: "cat",
    },
    {
      id: "product-2",
      name: "Cat Food",
      description:
        "High-quality cat food packed with essential nutrients for a balanced diet.",
      price: 22,
      image: CatFood,
      categories: "cat",
    },
    {
      id: "product-3",
      name: "Dog Food",
      description:
        "Nutritious and tasty food to keep your dog healthy and active.",
      price: 25,
      image: DogFood,
      categories: "dog",
    },
    {
      id: "product-4",
      name: "Pet Plate",
      description: "Durable and easy-to-clean plate for your pet’s meals.",
      price: 12,
      image: PetPlate,
      categories: "dog",
    },
    {
      id: "product-5",
      name: "Bird Water",
      description:
        "A clean and convenient water dispenser for your feathered friend.",
      price: 14,
      image: BirdWater,
      categories: "bird",
    },
    {
      id: "product-6",
      name: "Dog Water",
      description: "Fresh and clean water supply to keep your dog hydrated.",
      price: 16,
      image: DogWater,
      categories: "dog",
    },
    {
      id: "product-7",
      name: "Fish Food",
      description:
        "Premium fish food to enhance color and health of your fish.",
      price: 20,
      image: FishFood,
      categories: "fish",
    },
    {
      id: "product-8",
      name: "Bird Food",
      description:
        "A nutritious mix of seeds and grains for your bird’s daily diet.",
      price: 19,
      image: BirdFood,
      categories: "bird",
    },
    {
      id: "product-9",
      name: "Fish Aquarium",
      description: "A spacious and stylish aquarium for your aquatic pets.",
      price: 75,
      image: FishAquarium,
      categories: "fish",
    },
    {
      id: "product-10",
      name: "Cat Toy",
      description:
        "Fun and interactive toy to keep your cat engaged and happy.",
      price: 17,
      image: CatToy,
      categories: "cat",
    },
    {
      id: "product-11",
      name: "Dog Leash",
      description: "Durable and comfortable leash for walking your dog.",
      price: 20,
      image: DogLeash,
      categories: "dog",
    },
    {
      id: "product-12",
      name: "Cat Scratching Post",
      description: "Perfect scratching post to keep your cat entertained.",
      price: 30,
      image: CatScratchingPost,
      categories: "cat",
    },
    {
      id: "product-13",
      name: "Bird Cage",
      description: "Spacious and secure cage for your bird.",
      price: 50,
      image: BirdCage,
      categories: "bird",
    },
    {
      id: "product-14",
      name: "Kitten Cat Food",
      description: "Balanced diet for kitten cats.",
      price: 15,
      image: KittenCatFood,
      categories: "bird",
    },
    {
      id: "product-15",
      name: "Puppy Dog Shampoo",
      description: "Gentle shampoo for a clean and shiny puppy dog coat.",
      price: 18,
      image: PuppyDogShampoo,
      categories: "dog",
    },
    {
      id: "product-16",
      name: "Cat Collar",
      description: "Adjustable and stylish collar for cats.",
      price: 8,
      image: CatCollar,
      categories: "cat",
    },
    {
      id: "product-17",
      name: "Dog Training Pads",
      description: "Absorbent pads for dog training.",
      price: 20,
      image: DogTrainingPads,
      categories: "dog",
    },
    {
      id: "product-18",
      name: "Fish Tank Gravel",
      description: "Decorative and functional gravel for fish tanks.",
      price: 12,
      image: FishTankGravel,
      categories: "fish",
    },
    {
      id: "product-19",
      name: "Bird Perch",
      description: "Comfortable perch for birds of all sizes.",
      price: 14,
      image: BirdPerch,
      categories: "bird",
    },
    {
      id: "product-20",
      name: "Dog Chew Toy",
      description: "Durable chew toy to keep dogs entertained.",
      price: 15,
      image: DogChewToy,
      categories: "dog",
    },
  ],
};
