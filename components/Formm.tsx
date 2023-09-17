"use client";
import { useEffect, useState } from "react";
const Formm = () => {
  const [comments, setcomments] = useState([
    "nice project !",
    "A great project.",
  ]);
  const [newCommnets, setNewComments] = useState("");
  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    addItem(newCommnets);
  };
  const addItem = (item: string) => {
    const ne = item;
    const newItems = [...comments, ne];
    setcomments(newItems);
  };
  return (
    <div>
      <section className="flex-auto mx-12 my-3">
        <h1 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-black md:text-2xl lg:text-2xl">
          Comments
        </h1>

        {comments.map((cmnt) => {
          return (
            <div>
              {" "}
              <h1 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-black md:text-xl lg:text-xl">
                User
              </h1>
              <p className="text-lg font-normal text-gray-800 lg:text-xl dark:text-gray-400">
                {" "}
                {cmnt}
              </p>
            </div>
          );
        })}
      </section>
      <form className="flexStart  w-full form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your Comment"
          value={newCommnets}
          onChange={(event) => setNewComments(event.target.value)}
        />
        <button
          type="submit"
          className=" h-10 px-6 font-semibold rounded-md bg-violet-500 text-white"
        >
          Comment
        </button>
      </form>
    </div>
  );
};
export default Formm;
