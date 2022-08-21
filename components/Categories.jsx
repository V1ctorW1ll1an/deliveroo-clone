import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "category"]`)
            .then((data) => {
                setCategories(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        // categoryCard
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
        >
            {/* Category cards ... */}
            {categories?.map((category) => (
                <CategoryCard
                    imgUrl={urlFor(category.image).url()}
                    title={category.name}
                ></CategoryCard>
            ))}
        </ScrollView>
    );
};

export default Categories;
