import type { TextareaHTMLAttributes } from "react";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = ({ ...rest }: IProps) => {
  return (
    <textarea
      className="border-[1px] w-full border-gray-300 shadow-md p-2 focus:border-[#149eca] focus:outline-none rounded-lg focus:ring-1 focus:ring-[#149eca]"
      rows={6}
      {...rest}
    ></textarea>
  );
};

export default Textarea;
