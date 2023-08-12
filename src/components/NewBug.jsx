import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { added } from "../redux/Actions";

const NewBug = () => {
  const nameRef = useRef(null);
  const desRef = useRef(null);

  const user = useSelector((state) => state.BugReducer.user);
  const dispatch = useDispatch();
  const submit = () => {
    if (nameRef.current.value === "") {
      nameRef.current.focus();
      return;
    }
    if (desRef.current.value === "") {
      desRef.current.focus();
      return;
    }
    dispatch(added({founder:user, name:nameRef.current.value, description:desRef.current.value}));
    desRef.current.value = "";
    nameRef.current.value = "";
    alert('bug added to list of active bugs..')
  };
  return (
    <div class='min-h-screen flex w-full items-center justify-center'>
      <div class="flex-col space-y-8 text-gray-200">
      <input
        class="bg-transparent outline-none w-[20rem] border-b border-gray-500 px-2 py-1"
        placeholder="name"
        ref={nameRef}       
      />
      <br />
      <input
        class="bg-transparent outline-none w-[20rem] border-b border-gray-500 px-2 py-1"
        placeholder="description"
        ref={desRef}        
      />
      <br />
      <div class="flex justify-center">
        <button
          class="bg-blue-900 text-white w-[7rem] py-2 rounded-sm"
          onClick={submit}
        >
          add
        </button>
      </div>
    </div>
    </div>
  );
};

export default NewBug;
