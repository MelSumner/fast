import { childrenSchema, ChildrenType } from "@microsoft/fast-tooling";

/**
 * Complies with FAST Tooling 2.0
 */
export default {
    $schema: "http://json-schema.org/schema#",
    title: "Typography",
    description: "A typography component's schema definition.",
    type: "object",
    id: "@microsoft/fast-components-react-msft/typography",
    formPluginId: "@microsoft/fast-components-react-msft/typography",
    properties: {
        tag: {
            title: "HTML tag",
            type: "string",
            enum: [
                "caption",
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "p",
                "span",
                "figcaption",
            ],
        },
        size: {
            title: "Type size",
            type: "number",
            enum: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        },
        children: {
            ...childrenSchema,
            formPluginId: "@microsoft/fast-components-react-msft/typography/children",
            allowTypes: [ChildrenType.string],
            examples: ["Lorem ipsum sit amet"],
        },
    },
    required: ["children"],
};