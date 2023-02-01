"use client";

import {
  Button,
  Card,
  Carousel,
  Checkbox,
  Footer,
  Label,
  TextInput,
  Timeline,
  Tooltip,
} from "flowbite-react";
import React ,{ useEffect, useState }from "react";
import {
  BsDribbble,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import {
} from "react-icons/hi";
import Header from "./components/header";
import { SidebarProvider } from "./context/SidebarContext";
import Blogs from "./components/blogs";
import Contact from "./components/contact";

import { BrowserRouter,Route,Routes } from "react-router-dom"


export default function Index(){
  if (typeof window !== 'undefined') {
    const [color, setColor] = useState('blue');
    useEffect(() => setColor('red'), []);
  return (
    <BrowserRouter>
    <SidebarProvider>
      <Header />
      <div className="flex dark:bg-gray-900">
        <main className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]">
        
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <div className="order-1">
        </div>
      </div>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-center text-4xl font-normal text-white p-2 bg-cyan-700">
            Footer
          </h2>
        </header>
        <FooterExample />
      </section>
    </SidebarProvider>
    </BrowserRouter>
  );
  }
}


function HomePage(): JSX.Element {
  return (
    <div className="p-6">
      <section>
        <header>
          <h1 className="mb-6 font-extrabold text-4xl bg-clip-text ">
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">STU TALK</span><code className="text-blue-600"> voice of </code> <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">VBITIANS!</span>
          </h1>
        </header>
      </section>
      
      <section>
        <CarouselExample />
      </section>

      <section className="mt-20">
      <header>
          <h2 className="mt-9 text-center mb-3 text-4xl font-bold dark:text-gray-200 underline decoration-sky-700 decoration-solid decoration-6 underline-offset-8">
            <span>UPCOMING</span><span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text"> EVENTS</span>
          </h2>
        </header>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <CardExample1 />
          <CardExample2 />
          <CardExample3 />
        </div>
        <div className="flex space-x-2 justify-center">
          <Tooltip
    content="Google Form Link"
    style="dark"
    placement="right"
  >
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdUPJvSBJNWA5XnAIw8LhXkv9jDveh1uMswQqBrOgKCMYbaGw/viewform" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">Publish your Event</span>
            <span className="relative invisible">Publish your Event</span>
          </a>  
          </Tooltip>          
        </div>
      </section>

      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-semibold dark:text-gray-200">
            OUR JOURNEY !
          </h2>
        </header>
        <TimelineExample />
      </section>

      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-semibold dark:text-gray-200 text-center">
            Contact Us
          </h2>
        </header>
        <FormsExample />
      </section>
    </div>
  );
}



function CardExample1(): JSX.Element {
  return (
    <div className="max-w-sm">
      <div className="shadow hover:shadow-lg transition-all">
      <Card
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://www.stutalk.in/images/events/temp-1.jpeg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
      </div>
    </div>
  );
}
function CardExample2(): JSX.Element {
  return (
    <div className="max-w-sm">
      <div className="shadow hover:shadow-lg transition-all">
      <Card
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://www.stutalk.in/images/events/temp-2.png"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
      </div>
    </div>
  );
}
function CardExample3(): JSX.Element {
  return (
    <div className="max-w-sm">
      <div className="shadow hover:shadow-lg transition-all">
      <Card
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://www.stutalk.in/images/events/temp-3.jpeg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
      </div>
    </div>
  );
}

function CarouselExample(): JSX.Element {
  return (
    <div className="h-56 sm:h-64 xl:h-96 2xl:h-96">
      <Carousel>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="..."
          src="https://images.pexels.com/photos/7414106/pexels-photo-7414106.jpeg"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="..."
          src="https://images.pexels.com/photos/5922079/pexels-photo-5922079.jpeg"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="..."
          src="https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg"
        />
      </Carousel>
    </div>
  );
}



function FormsExample(): JSX.Element {
  return (
    <div className="flex flex-row gap-4">
      <div>
      <img src="https://www.stutalk.in/images/blog/blog-63-1.jpg" className="w-72 h-52 mt-10"/>
      </div>
      <div className="w-full">
    <form className="flex flex-col gap-4 w-full">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">Your Email</Label>
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="name@stutalk.in"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">Description</Label>
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me next time</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
    </div>
    </div>
  );
}

function FooterExample(): JSX.Element {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="/"
              src="/logo.png"
              alt="Stu Talk Logo"
              name="Stu Talk"
            />
          </div>
          <div>
            <span className="text-black-400">Write us at: </span><span className="hover:underline decoration-sky-500"><a className="text-sky-600 " href="mailto:vbit.stutalk@gmail.com">vbit.stutalk@gmail.com</a></span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="/">Our Team</Footer.Link>
                <Footer.Link href="/">Know us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://www.instagram.com/vbit.stutalk/">Instagram</Footer.Link>
                <Footer.Link href="https://www.youtube.com/channel/UCqsr0kgZjZnxQPV9i8UcX1A">Youtube</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="/">Privacy Policy</Footer.Link>
                <Footer.Link href="/">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="/" by="STU TALK™" year={2015} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="/" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/vbit.stutalk/" icon={BsInstagram} />
            <Footer.Icon href="https://www.youtube.com/channel/UCqsr0kgZjZnxQPV9i8UcX1A" icon={BsYoutube} />
            <Footer.Icon href="https://www.linkedin.com/company/stutalk-vbit/" icon={BsLinkedin} />
            <Footer.Icon href="/" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}



function TimelineExample(): JSX.Element {
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>February 20xx</Timeline.Time>
          <Timeline.Title>Main Moto of Stutalk !!</Timeline.Title>
          <Timeline.Body>
          StuTalk is a student- run forum that serves as the official campus magazine of VBIT, since 2007. We design and release two editons comprising a Volume in an academic year namely: The Freshmen Edition and The Republic Edition.
          </Timeline.Body>

        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>March 20xx</Timeline.Time>
          <Timeline.Title>Bradcast Journalism</Timeline.Title>
          <Timeline.Body>
          The latest extension of our forum aims to engage students with insightful and entertaining videos.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point/>
        <Timeline.Content>
          <Timeline.Time>April 20xx</Timeline.Time>
          <Timeline.Title>Saadhya</Timeline.Title>
          <Timeline.Body>
          The Flagship event holds competitions that invoke to invoke a sense of diplomacy and creativity.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}

