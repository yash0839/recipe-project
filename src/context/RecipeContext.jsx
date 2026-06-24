import React, { createContext, useEffect, useState } from 'react'

export const recipecontext = createContext(null)

const RecipeContext = (props) => {
    const [data, setdata] = useState([])

    useEffect(() => {
        const storedRecipes = localStorage.getItem("recipes")
        
        if (storedRecipes) {
            try {
                const parsedData = JSON.parse(storedRecipes)
                setdata(parsedData)
            } catch (error) {
                console.error("Error parsing recipes:", error)
                addSampleData()
            }
        } else {
            addSampleData()
        }
    }, [])

    const addSampleData = () => {
        const sampleData = [
            {
                id: "1",
                title: "Classic Margherita Pizza",
                desc: "A classic Italian pizza with fresh mozzarella, basil, and tomato sauce on a crispy crust.",
                chef: "Chef Antonio",
                image: "https://cdn.dummyjson.com/recipe-images/1.webp",
                category: "dinner",
                ingredients: "Pizza dough, Tomato sauce, Fresh mozzarella, Basil leaves, Olive oil, Salt",
                instructions: "Preheat oven to 475°F, Roll out dough, Spread sauce, Add cheese and basil, Bake for 12-15 minutes"
            },
            {
                id: "2",
                title: "Spaghetti Carbonara",
                desc: "Creamy pasta with pancetta, eggs, and parmesan cheese. A Roman classic!",
                chef: "Chef Maria",
                image: "https://cdn.dummyjson.com/recipe-images/2.webp",
                category: "dinner",
                ingredients: "Spaghetti, Pancetta, Eggs, Parmesan cheese, Black pepper, Salt",
                instructions: "Cook pasta al dente, Fry pancetta until crispy, Mix eggs and cheese, Combine everything with pasta water"
            },
            {
                id: "3",
                title: "Chicken Tikka Masala",
                desc: "Tender chicken in a rich, creamy tomato sauce with aromatic Indian spices.",
                chef: "Chef Raj",
                image: "https://cdn.dummyjson.com/recipe-images/3.webp",
                category: "dinner",
                ingredients: "Chicken breast, Yogurt, Masala spices, Tomato sauce, Heavy cream, Ginger, Garlic",
                instructions: "Marinate chicken in yogurt and spices, Grill until charred, Make sauce with tomatoes and cream, Simmer together"
            },
            {
                id: "4",
                title: "Fluffy Pancakes with Maple Syrup",
                desc: "Fluffy pancakes served with butter and maple syrup. Perfect for weekend breakfast!",
                chef: "Chef Emma",
                image: "https://cdn.dummyjson.com/recipe-images/4.webp",
                category: "breakfast",
                ingredients: "All-purpose flour, Eggs, Milk, Baking powder, Sugar, Butter, Maple syrup",
                instructions: "Mix dry ingredients, Whisk wet ingredients, Combine gently, Cook on griddle until bubbly, Serve with butter and syrup"
            },
            {
                id: "5",
                title: "Quinoa Salad Bowl",
                desc: "Healthy and refreshing quinoa salad with fresh vegetables and zesty lemon dressing.",
                chef: "Chef Lisa",
                image: "https://cdn.dummyjson.com/recipe-images/5.webp",
                category: "lunch",
                ingredients: "Quinoa, Cucumber, Cherry tomatoes, Feta cheese, Lemon juice, Olive oil, Fresh herbs",
                instructions: "Cook quinoa according to package, Chop vegetables, Whisk dressing, Toss everything together, Chill before serving"
            },
            {
                id: "6",
                title: "Beef Burger with Fries",
                desc: "Juicy beef burger with melted cheese, fresh lettuce, and crispy fries.",
                chef: "Chef Mike",
                image: "https://cdn.dummyjson.com/recipe-images/6.webp",
                category: "dinner",
                ingredients: "Ground beef, Burger buns, Cheddar cheese, Lettuce, Tomato, Onion, Potatoes, Oil",
                instructions: "Form beef patties, Season with salt and pepper, Grill to desired doneness, Toast buns, Assemble with toppings"
            },
            {
                id: "7",
                title: "Greek Yogurt Parfait",
                desc: "Layered Greek yogurt with granola and fresh berries. A healthy breakfast option.",
                chef: "Chef Sarah",
                image: "https://cdn.dummyjson.com/recipe-images/7.webp",
                category: "breakfast",
                ingredients: "Greek yogurt, Granola, Mixed berries, Honey, Mint leaves",
                instructions: "Layer yogurt, granola, and berries in a glass, Drizzle with honey, Garnish with mint, Serve immediately"
            },
            {
                id: "8",
                title: "Grilled Salmon with Vegetables",
                desc: "Perfectly grilled salmon served with roasted seasonal vegetables.",
                chef: "Chef James",
                image: "https://cdn.dummyjson.com/recipe-images/8.webp",
                category: "lunch",
                ingredients: "Salmon fillet, Olive oil, Lemon, Garlic, Asparagus, Bell peppers, Salt, Pepper",
                instructions: "Season salmon with oil and spices, Grill skin-side down, Roast vegetables in oven, Serve with lemon wedges"
            },
            {
                id: "9",
                title: "Vegetable Stir Fry",
                desc: "Quick and healthy vegetable stir fry with tofu and savory sauce.",
                chef: "Chef Mei",
                image: "https://cdn.dummyjson.com/recipe-images/9.webp",
                category: "dinner",
                ingredients: "Tofu, Broccoli, Bell peppers, Carrots, Soy sauce, Ginger, Garlic, Sesame oil",
                instructions: "Press and cube tofu, Stir-fry garlic and ginger, Add vegetables, Add tofu and sauce, Cook until vegetables are tender-crisp"
            },
            {
                id: "10",
                title: "Chocolate Chip Cookies",
                desc: "Classic homemade chocolate chip cookies that are crispy on the edges and chewy in the center.",
                chef: "Chef Emily",
                image: "https://cdn.dummyjson.com/recipe-images/10.webp",
                category: "supper",
                ingredients: "Butter, Brown sugar, White sugar, Eggs, Vanilla, Flour, Baking soda, Chocolate chips",
                instructions: "Cream butter and sugars, Add eggs and vanilla, Mix dry ingredients, Fold in chocolate chips, Bake at 375°F for 10-12 minutes"
            }
        ]
        
        setdata(sampleData)
        localStorage.setItem("recipes", JSON.stringify(sampleData))
    }

    return (
        <recipecontext.Provider value={{ data, setdata }}>
            {props.children}
        </recipecontext.Provider>
    )
}

export default RecipeContext