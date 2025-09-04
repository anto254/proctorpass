import React from 'react';
import { Card, Image, Text } from "@mantine/core";
import cardImage from '../../assets/graphics/article2.jpg'
import { Link } from 'react-router-dom';
import { HiOutlineArrowSmRight } from "react-icons/hi";


function HowToCheatProctoruCard() {
    return (
        <div>
            <Card
                shadow="sm"
                padding="lg"
                radius="md"
                className="bg-dark border h-[400px] border-secondary flex flex-col gap-2"
            >
                <Card.Section>
                    <img
                        src={cardImage}
                        alt="How To Cheat On ProctorU"
                        className="h-[150px] w-full "
                        loading="lazy"
                    />
                </Card.Section>
                <Link to={`/blog/how-to-cheat-on-proctoru`}>
                
                <Text size="sm" color="#FF6500">
                        <h1>Unveiling How Some Students Cheat on ProctorU Exams</h1>
                </Text>
                </Link>
                <Text size="sm" color="dimmed">
                     There are many methods you can use to cheat on ProctorU exams. All you need is a little practice on the method you want to use and some research. However, it's important to note that getting caught can have serious consequences                </Text>

                <Link to={`/blog/how-to-cheat-on-proctoru`}>
                    <div className="flex  items-center gap-2 cursor-pointer  ">
                        <h1 className="text-primary ">Read more </h1>
                        <HiOutlineArrowSmRight color="#FF6500" size={20} />
                    </div>
                </Link>
            </Card>
        </div>
    )
}

export default HowToCheatProctoruCard