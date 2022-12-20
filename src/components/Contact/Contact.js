import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
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
          console.log(error.text);
        }
      );
    e.form.reset();
  };

  return (
    <div
      id="contact"
      className="bg-gradient-to-br from-black via-black to-purple-900 text-gray-100 lg:px-8 py-1 "
    >
      <div className="divider text-4xl text-center mb-16 pt-12 lg:text-5xl font-bold leading-tight lg:w-2/5 mx-auto font-cinzel ">
        Contact
      </div>
      <div className="grid lg:gap-10 grid-cols-1 md:grid-cols-2 h-auto container m-auto text-white ">
        <div
          className="grid gap-3 xl:gap-10 p-3 xl:p-10 xl:mx-12 font-sans text-xs md:text-base"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <div className="col-span-4 relative pointer-events-none mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#ea4a4c"
              className="w-6 h-6 absolute top-3 left-3 inset-y-0"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>

            <input
              className="block w-full pl-12 bg-[#222222] p-3 rounded-lg focus:outline focus:shadow-outline"
              value="#House 172/2/A, Salimuddin Road, Mirpur-1, Dhaka"
            />
          </div>
          <div className="col-span-4 relative pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#ea4a4c"
              className="w-5 h-5 absolute top-3 left-3 inset-y-0"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>

            <input
              className="block w-full pl-12 bg-[#222222] p-3 rounded-lg focus:outline focus:shadow-outline"
              value="+880 1701-018652"
            />
          </div>
          <div className="col-span-4 relative pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#ea4a4c"
              className="w-6 h-6 absolute top-3 left-3 inset-y-0"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>

            <input
              className="block w-full pl-12 bg-[#222222] p-3 rounded-lg focus:outline focus:shadow-outline"
              value="swe.merazul@gmail.com"
            />
          </div>
          <div className="col-span-4 relative pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ea4a4c"
              viewBox="0 0 24 24"
              className="w-5 h-5 absolute top-3 left-3 inset-y-0"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
            </svg>

            <input
              className="block w-full pl-12 bg-[#222222] p-3 rounded-lg focus:outline focus:shadow-outline"
              value="https://www.facebook.com/sowad21"
            />
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid grid-cols-2 gap-6 p-3 xl:p-10"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <div className="">
            <input
              className="w-full bg-[#222222] p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Full Name"
              nname="user_name"
              required
            />
          </div>
          <div className="">
            <input
              className="w-full bg-[#222222] p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name="user_email"
              placeholder="Email"
              required
            />
          </div>
          <div className="col-span-2">
            <textarea
              name="message"
              required
              rows="3"
              placeholder="Feel Free to Say Anythings."
              className="w-full bg-[#222222] p-3 rounded-lg focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <button
              type="submit"
              className="uppercase btn text-sm font-bold tracking-wide bg-gradient-to-r from-green-400 to-blue-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
