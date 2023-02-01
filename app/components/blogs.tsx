import React, { useState } from 'react'
import {
    Accordion,
    Alert,
    Avatar,
    Badge,
    Breadcrumb,
    Button,
    Card,
    Carousel,
    Checkbox,
    Dropdown,
    Footer,
    Label,
    ListGroup,
    Modal,
    Navbar,
    Pagination,
    Progress,
    Rating,
    Sidebar as FlowbiteSidebar,
    Spinner,
    Table,
    Tabs,
    TextInput,
    Timeline,
    Toast,
    Tooltip,
  } from "flowbite-react";

  import Header from "./header";
  import Sidebar from "./sidebar";
  import { SidebarProvider } from "../context/SidebarContext";

const blogs = () => {
  return (
    <SidebarProvider>
        <section>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <CardExample1 />
          <CardExample1 />
          <CardExample1 />
          <CardExample1 />
          <CardExample1 />
          <CardExample1 />
        </div>
      </section>
        <PaginationExample />
    </SidebarProvider>
  )
}

function ActualSidebar(): JSX.Element {
    return (
      <Sidebar>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" >
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="#" >
              Kanban
            </Sidebar.Item>
            <Sidebar.Item href="#" >
              Inbox
            </Sidebar.Item>
            <Sidebar.Item href="#" >
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" >
              Products
            </Sidebar.Item>
            <Sidebar.Item href="#">
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="#" >
              Sign Up
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#">
              Upgrade to Pro
            </Sidebar.Item>
            <Sidebar.Item href="#">
              Documentation
            </Sidebar.Item>
            <Sidebar.Item href="#">
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    );
  }

function PaginationExample(): JSX.Element {
    const [currentPage, setCurrentPage] = useState(1);
  
    return (
      <div className="flex items-center justify-center text-center">
        <Pagination
          currentPage={currentPage}
          layout="table"
          onPageChange={(page: number) => setCurrentPage(page)}
          showIcons
          totalPages={16}
        />
      </div>
    );
  }

  function CardExample1(): JSX.Element {
    return (
      <div className="max-w-sm">
        <div className="shadow hover:shadow-lg transition-all">
           <div className="flex justify-center">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
              <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">NBA - M</h5>
              <p className="text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up the bulk of the card's
                content.
              </p>
              <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
    </div>
  </div>
</div>
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
  
  

export default blogs
