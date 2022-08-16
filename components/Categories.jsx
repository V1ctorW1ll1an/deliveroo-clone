import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
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
            <CategoryCard
                imgUrl="https://links.papareact.com/gn7"
                title="testing"
            ></CategoryCard>
            <CategoryCard
                imgUrl="https://links.papareact.com/gn7"
                title="testing"
            ></CategoryCard>
            <CategoryCard
                imgUrl="https://links.papareact.com/gn7"
                title="testing"
            ></CategoryCard>
            <CategoryCard
                imgUrl="https://links.papareact.com/gn7"
                title="testing"
            ></CategoryCard>
            <CategoryCard
                imgUrl="https://links.papareact.com/gn7"
                title="testing"
            ></CategoryCard>
            <CategoryCard
                imgUrl="https://links.papareact.com/gn7"
                title="testing"
            ></CategoryCard>
        </ScrollView>
    );
};

export default Categories;