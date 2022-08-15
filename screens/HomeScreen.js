import {
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
    UserIcon,
    ChevronDownIcon,
    SearchIcon,
    AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className="bg-white p-5">
            <View className="flex-row pb-3 items-center mx-4 space-x-2 px-2">
                <Image
                    source={{
                        uri: "https://links.papareact.com/wru",
                    }}
                    className="h-7 w-7 bg-gray-300 rounded-full p-4"
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
            <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
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
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
