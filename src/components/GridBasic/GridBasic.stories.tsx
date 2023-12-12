import type { Meta, StoryObj } from "@storybook/react"
import GridBasic from "./GridBasic"

const meta = {
    title: 'GridBasic',
    component: GridBasic,
    tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof GridBasic>;

export default meta;

type Story = StoryObj<typeof GridBasic>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
