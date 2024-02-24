import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";

export default function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_geptarq",
        "template_4rdvjcl",
        form.current,
        "UsI4PutYaEIJj4vc7"
      )
      .then(
        (result) => {
          if (result) {
            toast.success("Your Message Sent Successfully!");
          }
        },
        (error) => {
          toast.warn(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="grid grid-cols-2  gap-y-4 gap-x-4 lg:w-2/3 md:pt-10"
    >
      <div className="">
        <input
          className="w-full bg-black p-3 rounded-md focus:outline-none focus:shadow-outline "
          type="text"
          placeholder="Name"
          name="user_name"
          required
        />
      </div>
      <div className="">
        <input
          className="w-full bg-black p-3 rounded-md focus:outline-none focus:shadow-outline"
          type="text"
          name="user_email"
          placeholder="Email"
          required
        />
      </div>
      <div className="col-span-2">
        <input
          className="w-full bg-black p-3 rounded-md focus:outline-none focus:shadow-outline"
          type="text"
          name="user_subject"
          placeholder="Subject"
          required
        />
      </div>
      <div className="col-span-2">
        <textarea
          name="message"
          required
          rows="4"
          placeholder="Message"
          className="w-full bg-black p-3 rounded-md focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>
      <div className="col-span-2 lg:col-span-1">
        <button
          type="submit"
          className="uppercase btn text-sm font-bold tracking-wide bg-gradient-to-r from-green-400 to-blue-500 text-gray-100 p-3 rounded-full w-full focus:outline-none focus:shadow-outline"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
