import Image from "next/image";

const ContactForm = () => {
  return (
    <div className="flex flex-wrap justify-between items-center">
      <div className="w-full md:w-1/2 md:flex-1">
        <div className="flex flex-col items-center gap-8 !py-8 px-20 dark:text-zinc-500">
          <h2 className="text-6xl font-PlayfairDisplay font-bold">
            Get in touch{" "}
          </h2>
          <p>
            To get in touch fill out the contact form below or call us at
            123.456-7.
          </p>
          <form
            action=""
            className="flex flex-col items-center gap-8 neumorphic-form w-full"
          >
            <div className="w-full">
              <label
                htmlFor=""
                className="text-xl font-bold tracking-widest text-zinc-600"
              >
                YOUR NAME
              </label>
              <input type="text" className="neumorphic-input !py-4 !px-8" />
            </div>
            <div className="w-full">
              <label
                htmlFor=""
                className="text-xl font-bold tracking-widest text-zinc-600"
              >
                YOUR EMAIL
              </label>
              <input type="text" className="neumorphic-input !py-4 !px-8" />
            </div>
            <div className="w-full">
              <label
                htmlFor=""
                className="text-xl font-bold tracking-widest text-zinc-600"
              >
                YOUR MESSAGE
              </label>
              <textarea className="neumorphic-input min-h-60 max-h-96"></textarea>
            </div>
            <button className="neumorphic-button">SUBMIT</button>
          </form>
        </div>
      </div>

      <div className="w-full md:w-1/2 md:flex-1">
        <Image
          alt="contact form's photo"
          src="/img/contactForm.jpg"
          className="!w-full h-full object-cover object-center !flex-1"
          width={800}
          height={800}
        />
      </div>
    </div>
  );
};
export default ContactForm;
