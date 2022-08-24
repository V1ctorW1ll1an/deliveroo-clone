import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";

import {
    ArrowLeftIcon,
    ChevronRightIcon,
    LocationMarkerIcon,
    StarIcon,
} from "react-native-heroicons/solid";

import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";

const RestaurantScreen = () => {
    const navigation = useNavigation();
    const {
        params: {
            id,
            title,
            imgUrl,
            rating,
            genre,
            address,
            shortDescription,
            dishes,
            long,
            lat,
        },
    } = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <ScrollView>
            <View className="relative">
                <Image
                    source={{
                        uri: urlFor(imgUrl).url(),
                    }}
                    className="h-56 w-full bg-gray-300 p-4"
                />
                <TouchableOpacity
                    onPress={navigation.goBack}
                    className="absolute left-5 top-14 p-2 bg-gray-100 rounded-full "
                >
                    <ArrowLeftIcon size={20} color="#00CCBB" />
                </TouchableOpacity>
            </View>
            <View className="bg-white">
                <View className="px-4 py-4">
                    <Text className="text-3xl font-bold">{title}</Text>
                    <View className="flex-row space-x-2 my-1">
                        <View>
                            <StarIcon size={22} color="#00CCBB" opacity={0.5} />
                            <Text className="text-xs text-gray-500">
                                <Text className="text-green-500">{rating}</Text>{" "}
                                · {genre}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default RestaurantScreen;
