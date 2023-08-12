import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {getBug, removed, solved } from "../redux/Actions";
import { useNavigate } from "react-router-dom";
import BugHomeScreen from "../screens/BugHomeScreen";

const MoreIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="non"
    color="cyan"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    class="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const ClearIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    color="red"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const CurrentBugs = () => {
  const bugs = useSelector((state) => state.BugReducer.bugs);
  const user = useSelector((state) => state.BugReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (bugs.length === 0) {
    return <BugHomeScreen message={"Empty"} />;
  }
  return (
    <div class="lg:w-2/3 w-full mx-auto overflow-auto">
      <table class="text-gray-300 table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr class="border-b border-gray-700">
            <th class="px-4 py-3 title-font tracking-wider font-medium text-center text-sm rounded-tl rounded-bl">
              founder
            </th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-center  text-sm">
              name
            </th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-center text-sm">
              description
            </th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-center text-sm">
              status
            </th>
          </tr>
        </thead>
        <tbody>
          {bugs.map((bug) => {
            return (
              <tr key={bug.id}>
                <td class="px-2 py-2 text-center">{bug.founder}</td>
                <td class="px-2 py-2 text-center">{bug.name}</td>
                <td class="px-2 py-2 text-center">{bug.description}</td>
                <td class="px-2 py-2 text-center">
                  <input
                    class="min-h-[10px]"
                    type="checkbox"
                    checked={bug.resolved}
                    onChange={() => {
                      dispatch(solved({ id: bug.id, resolver: user }));
                    }}
                  />
                </td>
                <td class="w-3 px-2 py-2">
                  <span
                    class="cursor-pointer"
                    onClick={() => {
                      dispatch(removed({ id: bug.id, remover: user }));
                    }}
                  >
                    <ClearIcon />
                  </span>
                </td>
                <td class="w-3 px-2 py-2">
                  <span
                    class="cursor-pointer"
                    onClick={() => {
                      dispatch(getBug({id:bug.id}))
                      navigate(`/bug`);
                    }}
                  >
                    <MoreIcon />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CurrentBugs;
