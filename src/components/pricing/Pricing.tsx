import { Heading, SimpleGrid, Switch, Text } from '@hope-ui/solid';
import { Component, For } from 'solid-js';
import PricingOptions from './components/PricingOptions';
import ProPlanFeatures from './components/ProPlanFeatures';

const Pricing: Component = () => {
    return (
        <div class='py-10 px-10'>
            <Heading size='3xl' class='text-center pb-10'>Pro Pricing Plans</Heading>

            <Heading size='2xl' class='text-center pb-20'>Choose Your Plan</Heading>
            {/* <main class='flex justify-center pb-20'>
                <div class='flex '>
                    <Text class='px-5'>Monthly</Text>
                    <Switch size='lg' colorScheme="danger" />
                    <Text class='px-5'>Anually</Text>
                </div>
            </main> */}
            <SimpleGrid columns={{ "@initial": 1, "@md": 3 }} gap="40px">
                <For each={Array(3).fill("")}>
                    {(item => <PricingOptions />)}
                </For>
            </SimpleGrid>
            <ProPlanFeatures />
        </div>
    )
}

export default Pricing;