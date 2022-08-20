export default {
    name: "restaurant",
    title: "Restaurant",
    type: "document",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Restaurant name",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "shortDescription",
            type: "string",
            title: "Short description",
            validation: (Rule) => Rule.max(200),
        },
        {
            name: "image",
            type: "image",
            title: "Image of the restaurant",
        },
        {
            name: "lat",
            type: "number",
            title: "Latitude of the restaurant",
        },
        {
            name: "long",
            type: "number",
            title: "Longitude of the restaurant",
        },
        {
            name: "address",
            type: "string",
            title: "Restaurant address",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "rating",
            type: "number",
            title: "Enter  Rating from 1 to 5 stars",
            validation: (Rule) =>
                Rule.required()
                    .min(1)
                    .max(5)
                    .error("Rating must be between 1 and 5"),
        },
        {
            name: "type",
            title: "Category",
            validation: (Rule) => Rule.required(),
            type: "reference",
            to: [{ type: "category" }],
        },
        {
            name: "dishes",
            type: "array",
            title: "Dishes",
            of: [{ type: "reference", to: [{ type: "dish" }] }],
        },
    ],
};