function Contact() {

  return (
    <>
      <div className="max-w-lg rounded-2xl bg-white p-6 shadow-lg mx-auto mt-10">
        <div className="flex">
          <i className="ti ti-user text-(--primary) rounded-full w-10 h-10 text-3xl p-1 bg-[#14b8a51a] mr-2 mt-2  "></i>
          <h1 className="font-bold mt-2.5">
            Contact Information
            <br />
            <span className="font-normal text-sm text-[grey] ">How can we reach you?</span>
          </h1></div>
        <div className="flex">
          <p className="pt-4 pr-2">First Name <span className="text-red-500">*</span><input className="rounded-xl p-2 border-2 border-black-500 mt-2" placeholder=" john" type="text"></input></p>

          <p className="pt-4 ">Last Name <span className="text-red-500">*</span><input className="rounded-xl p-2 border-2 border-black-500 mt-2 w-60 " placeholder=" Doe" type="text"></input></p>
        </div>
        <div className="">
          <p className="pt-4 pr-2">Email Address <span className="text-red-500">*</span><br /> <input className="rounded-xl p-2 border-2 border-black-500 mt-2 w-115" placeholder=" john.doe@gmail.com" type="text"></input></p>
        </div>
        <div className="">
          <p className="pt-4 pr-2">Phone Number <span className="text-red-500">*</span><br /> <input className="rounded-xl p-2 border-2 border-black-500 mt-2 w-115" placeholder=" john.doe@gmail.com" type="text"></input></p>
          <p className="text-[gray] pl-1">For delivery updates</p>
        </div>
        <div className="flex">
          <button className="bg-[#f6f7f9] text-black font-bold rounded-xl p-3 mt-6 w-full hover:bg-[#14b8a5] mr-1">Back</button>
          <button className="bg-[#14b8a5]  text-white font-bold rounded-xl p-3 mt-6 w-full hover:bg-[#14b8a5]">Continue to address</button>
        </div>
      </div>

    </>
  );
}

export default Contact;