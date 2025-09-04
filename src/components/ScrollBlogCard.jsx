import React from 'react';
import { Card, Image, Text } from "@mantine/core";
import cardImage from '../assets/graphics/hero4.avif'
import { Link } from 'react-router-dom';
import { HiOutlineArrowSmRight } from "react-icons/hi";


function ScrollBlogCard() {
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
                      alt="title"
                      className="h-[150px] w-full "
                      loading="lazy"
                  />
              </Card.Section>

              <Text size="sm" color="#FF6500">
                  <h1>Scroll blog title Scroll blog title</h1>
              </Text>
              <Text size="sm" color="dimmed">
                 solution to Proctoru exams. We help you ace them without requiring any significant effort from your part. Worry no more about online proctored exams....
              </Text>
              {/* <div className="content" dangerouslySetInnerHTML={{__html:blog.content}} /> */}

              <Link to={`/blog/title-of-the-blog`}>
                  <div className="flex  items-center gap-2 cursor-pointer  ">
                      <h1 className="text-primary ">Read more </h1>
                      <HiOutlineArrowSmRight color="#FF6500" size={20} />
                  </div>
              </Link>
          </Card>
    </div>
  )
}

export default ScrollBlogCard