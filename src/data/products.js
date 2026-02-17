import ChocolateMilkBread from "../assets/Product Images/Chocolate Milk Bread.png";
import CinnamonMilkBread from "../assets/Product Images/Cinnamon Milk Bread.png";
import MilkBreadRolls from "../assets/Product Images/Milk Bread Rolls.png";
import MilkBread from "../assets/Product Images/Milk Bread.png";
import PainDeMie from "../assets/Product Images/Pain de Mie.png";
import PineappleBuns from "../assets/Product Images/Pineapple Buns.png";
import StrawberrySandwich from "../assets/Product Images/Strawberry Sandwich.png"
const products = [
    {
        id: 1,
        title: "Chocolate Milk Bread",
        price: 10,
        img: ChocolateMilkBread,
        desc: `Our pillowy milk bread but with chocolate chips and a rich chocolate flavor. Contains: Wheat, Milk, Soy and Eggs`,
        inStock: true,
    },
    {
        id: 2,
        title: "Cinnamon Milk Bread",
        price: 8,
        img: CinnamonMilkBread,
        desc: `Our pillowy milk bread now with a beautiful cinnamon swirl. Contains: Wheat, Milk, and Eggs`,
        inStock: true,
    },
    {
        id: 3,
        title: "Milk Bread Rolls",
        price: 7,
        img: MilkBreadRolls,
        desc: `A roll version of our signature milk bread for easy sharing. Contains: Wheat, Milk, and Eggs`,
        inStock: true,
    },
        {
        id: 4,
        title: "Milk Bread",
        price: 7,
        img: MilkBread,
        desc: `A fluffy, soft, and slightly sweet Japanese bread. Contains: Wheat, Milk, and Eggs`,
        inStock: true,
    },
    {
        id: 5,
        title: "Pain de Mie",
        price: 8,
        img: PainDeMie,
        desc: `A soft and buttery bread with a soft crust. Contains: Wheat and Milk`,
        inStock: true,
    },
    {
        id: 6,
        title: "Pineapple Buns",
        price: 15,
        img: PineappleBuns,
        desc: `6 soft milk bread buns with a sugar topping`,
        inStock: true,
    },
    {
        id: 7,
        title: "Strawberry Sandwich",
        price: 8,
        img: StrawberrySandwich,
        desc: `Milk bread with homemade whipped cream, and strawberries`,
        inStock: true,
    },
]

export default products