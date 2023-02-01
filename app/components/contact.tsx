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

const contact = () => {
  return (
        <section>
        <div className="p-10">
            <h2 className="text-black-400 text-center text-xl"> we typically reply within 1 hour</h2>
          <FormsExample/>
        </div>
      </section>
  )
}


  function FormsExample(): JSX.Element {
    return (
        
      <form className="flex flex-col gap-4 ">
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
    );
  }
  
  

export default contact
