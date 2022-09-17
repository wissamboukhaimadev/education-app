import { Box, Text } from '@hope-ui/solid';
import { Component, For } from 'solid-js';
import { FaSolidCheck } from 'solid-icons/fa'

const ProPlanFeatures: Component = () => {
    return (
        <div class='py-20 '>
            <Box class='bg-gray-900 py-10 px-10 rounded-3xl'>
                <Text>What's included in Pro</Text>
                <div class='py-3' />
                <For each={Array(9).fill("")}>
                    {(item => (
                        <div class='py-5 flex'>
                            <FaSolidCheck size={24} color="#2EBC4F" />
                            <Text class='pl-5'>Premium community support</Text>
                        </div>
                    ))}
                </For>
            </Box>
        </div>
    )
}

export default ProPlanFeatures;