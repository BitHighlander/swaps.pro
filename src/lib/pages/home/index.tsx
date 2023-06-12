import React from "react";
import {
    Grid,
    Box,
    Avatar,
    VStack,
    IconButton,
    useDisclosure,
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Heading,
    List,
    ListItem,
    Divider,
    Flex, Stack
} from "@chakra-ui/react";
import { Page } from 'lib/layout/Page'
import {
    FaUserPlus,
    FaInbox,
    FaMicrophone,
    FaHeadset,
    FaChevronDown
} from "react-icons/fa";
import CTASection from "./components/CTASection";
import SomeImage from "./components/SomeImage";
import SomeText from "./components/SomeText";
import { SwapActions } from "./Swap/SwapActions";

const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef<HTMLButtonElement>(null);

    const avatars = [
        { id: 1, src: "avatar1.png" },
        { id: 2, src: "avatar2.png" },
        // Add more avatars as needed
    ];

    // Sample channels data
    const channels = ['General', 'Random', 'Games', 'Development'];

    return (
        <Page>
            <Flex maxWidth={{ base: "auto", "2xl": "1464px" }} mx="auto" px={16}>
                <Stack flex={1} spacing={4} justifyContent="center" alignItems="center">
                    <SwapActions />
                </Stack>
            </Flex>
        </Page>
    );
};

export default Home;
