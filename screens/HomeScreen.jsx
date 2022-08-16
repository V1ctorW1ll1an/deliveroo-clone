import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    UserIcon,
    ChevronDownIcon,
    SearchIcon,
    AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className="bg-white mt-5">
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image
                    source={{
                        uri: "https://links.papareact.com/wru",
                    }}
                    className="h-7 w-7 bg-gray-300 rounded-full"
                />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">
                        Deliver now!
                    </Text>
                    <Text className="font-bold text-xl">
                        Current location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>
                <UserIcon size={35} color="#00CCBB" />
            </View>

            {/* search */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
                    <SearchIcon color="gray" size={20} />
                    <TextInput
                        placeholder="Restaurants and cuisines"
                        keyboardType="default"
                    />
                </View>
                <AdjustmentsIcon color="#00CCBB" />
            </View>

            {/* body */}
            <ScrollView
                className="bg-gray-100"
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
            >
                {/* categories */}
                <Categories />
                {/* featured rows */}
                <FeaturedRow
                    id="1"
                    title="Featured"
                    description="Paid  placements from our partners"
                    featuredCategory="Featured"
                />
                <FeaturedRow
                    id="2"
                    title="Tasty Discounts"
                    description="Everyone's been enjoying these juicy discounts!"
                    featuredCategory="Discounts"
                />
                <FeaturedRow
                    id="3"
                    title="Offers near you!"
                    description="why not support your local restaurant tonight?"
                    featuredCategory="offers"
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
