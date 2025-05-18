import { Header } from "../../components/shared";
import pageBg from "../../assets/images/more/11.png";
import { FaArrowLeft } from "react-icons/fa6";

const AddCoffee = () => {
  return (
    <div>
      <Header />
      <div
        style={{ backgroundImage: `url(${pageBg})` }}
        className="pt-12 pb-28 border-2"
      >
        {/* add area */}
        <div className="">
          {/* back to home */}
          <div className="flex flex-row items-center gap-3 mx-32">
            <div className="">
              <FaArrowLeft />
            </div>
            <h1 className="font-rancho text-2xl">Back to home</h1>
          </div>
          {/* add new coffee */}
          <div className="">
            <div className="flex flex-col gap-6 mx-32 py-5 mt-3 bg-[#F4F3F0]">
              <div className="flex flex-col items-center justify-center gap-6">
                <h1 className="font-rancho text-5xl">Add New Coffee</h1>
                <p className="font-rancho text-center text-2xl mx-32">
                  It is a long established fact that a reader will be
                  distraceted by the readable content of a page when looking at
                  its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to
                  using Content here.
                </p>
              </div>
              {/* input area */}
              <div className="mx-14">
                <div className="flex flex-col gap-4 w-full ">
                  {/* input section 1 */}
                  <form action="" className="w-full flex flex-row gap-4 my-1">
                    {/* input 1 */}
                    <div className="flex flex-col gap-3 w-full">
                      <h1 className="font-bold text-xl">Name</h1>
                      <input
                        type="text"
                        placeholder="Enter Coffee name"
                        className="border px-2 py-0.5 rounded-md"
                      />
                    </div>
                    {/* input 2 */}
                    <div className="flex flex-col gap-3 w-full">
                      <h1 className="font-bold text-xl">Name</h1>
                      <input
                        type="text"
                        placeholder="Enter Coffee name"
                        className="border px-2 py-0.5 rounded-md"
                      />
                    </div>
                  </form>
                  {/* input section 2 */}
                  <form action="" className="w-full flex flex-row gap-4 my-1">
                    {/* input 1 */}
                    <div className="flex flex-col gap-3 w-full">
                      <h1 className="font-bold text-xl">Name</h1>
                      <input
                        type="text"
                        placeholder="Enter Coffee name"
                        className="border px-2 py-0.5 rounded-md"
                      />
                    </div>
                    {/* input 2 */}
                    <div className="flex flex-col gap-3 w-full">
                      <h1 className="font-bold text-xl">Name</h1>
                      <input
                        type="text"
                        placeholder="Enter Coffee name"
                        className="border px-2 py-0.5 rounded-md"
                      />
                    </div>
                  </form>
                  {/* input section 3 */}
                  <form action="" className="w-full flex flex-row gap-4 my-1">
                    {/* input 1 */}
                    <div className="flex flex-col gap-3 w-full">
                      <h1 className="font-bold text-xl">Name</h1>
                      <input
                        type="text"
                        placeholder="Enter Coffee name"
                        className="border px-2 py-0.5 rounded-md"
                      />
                    </div>
                    {/* input 2 */}
                    <div className="flex flex-col gap-3 w-full">
                      <h1 className="font-bold text-xl">Name</h1>
                      <input
                        type="text"
                        placeholder="Enter Coffee name"
                        className="border px-2 py-0.5 rounded-md"
                      />
                    </div>
                  </form>
                  {/* input section 1 */}
                  <form action="" className="w-full flex flex-row gap-4 my-1">
                    {/* input 1 */}
                    <div className="flex flex-col gap-3 w-full">
                      <h1 className="font-bold text-xl">Name</h1>
                      <input
                        type="text"
                        placeholder="Enter Coffee name"
                        className="border px-2 py-0.5 rounded-md"
                      />
                    </div>
                  </form>
                  <div className="">
                    <button></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddCoffee;
