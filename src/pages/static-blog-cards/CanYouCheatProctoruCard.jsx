import React from 'react';
import { Card, Image, Text } from "@mantine/core";
import cardImage from '../../assets/graphics/article1.jpg'
import { Link } from 'react-router-dom';
import { HiOutlineArrowSmRight } from "react-icons/hi";


function CanYouCheatProctoruCard() {
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
                        alt="Can You Cheat on ProctorU? Understanding the ProctorU Experience: Your Questions Answered"
                        className="h-[150px] w-full "
                        loading="lazy"
                    />
                </Card.Section>
                <Link  to={`/blog/can-you-cheat-on-proctoru-understanding-the-proctoru-experience-your-questions-answered`}>
                
                    <Text size="sm" color="#FF6500" className=''>
                    <h1>Can You Cheat on ProctorU? Understanding the ProctorU Experience: Your Questions Answered</h1>
                </Text>
                </Link>
                <Text size="sm" color="dimmed">
                    The world of proctoring can give rise to a multitude of questions, spanning from concerns about privacy and technical aspects to the overall examination experience. ...
                </Text>

                <Link to={`/blog/can-you-cheat-on-proctoru-understanding-the-proctoru-experience-your-questions-answered`}>
                    <div className="flex  items-center gap-2 cursor-pointer  ">
                        <h1 className="text-primary ">Read more </h1>
                        <HiOutlineArrowSmRight color="#FF6500" size={20} />
                    </div>
                </Link>
            </Card>
        </div>
    )
}

export default CanYouCheatProctoruCard