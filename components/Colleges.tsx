"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";

type Props = {
  title: string;
  state: string;
  filters: Array<string>;
  setCol: (value: string) => void;
};

const Colleges = ({ title, state, filters, setCol }: Props) => (
  <div className="flexStart flex-col w-full gap-7 relative">
    <label htmlFor={title} className="w-full text-gray-100">
      {title}
    </label>
    <Menu as="div" className="self-start relative">
      <div>
        <Menu.Button className="flexCenter custom_menu-btn bg-white" >
          {state || "College"}
          <Image src="/arrow-down.svg" width={10} height={5} alt="arrow down" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="flexStart custom_menu-items border-nav-border flex-col absolute left-0 mt-2 xs:min-w-[300px] w-fit max-h-60 origin-top-right rounded-xl bg-white border shadow-menu overflow-y-auto">
          {filters.map((tag) => (
            <Menu.Item key={tag}>
              <button
                type="button"
                value={tag}
                className="custom_menu-item"
                onClick={(e) => setCol(e.currentTarget.value)}
              >
                {tag}
              </button>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  </div>
);

export default Colleges;
