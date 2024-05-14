import { forwardRef } from "react";
const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea
          ref={ref}
          className=" w-full p-1 border-b-2 ronded-sm border-stone-300 text-stone-600 bg-stone-200 focus:outline-none focus:border-stone-600"
          {...props}
        ></textarea>
      ) : (
        <input
          ref={ref}
          className="w-full p-1 border-b-2 ronded-sm border-stone-300 text-stone-600 bg-stone-200 focus:outline-none focus:border-stone-600"
          {...props}
        ></input>
      )}
    </p>
  );
});

export default Input;
