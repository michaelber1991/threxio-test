import type { Meta, StoryObj } from "@storybook/react"
import Products from "./Products"

const meta = {
    title: 'Products',
    component: Products,
    tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof Products>;

export default meta;

type Story = StoryObj<typeof Products>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
