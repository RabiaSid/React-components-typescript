import "./App.css";
import { useState } from "react";
import AppTable from "./components/AppTable";
import AppCard from "./components/AppCard";
import AppSelect from "./components/AppSelect";
import AppButton from "./components/AppButton";
import AppInput from "./components/AppInput";

function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    // Handle button click logic
  };

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleSelectChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  let data = [
    {
      postId: 1,
      id: 1,
      name: "id labore ex et quam laborum",
      email: "Eliseo@gardner.biz",
      body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    },
    {
      postId: 1,
      id: 2,
      name: "quo vero reiciendis velit similique earum",
      email: "Jayne_Kuhic@sydney.com",
      body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
    },
    {
      postId: 1,
      id: 3,
      name: "odio adipisci rerum aut animi",
      email: "Nikita@garfield.biz",
      body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
    },
    {
      postId: 1,
      id: 4,
      name: "alias odio sit",
      email: "Lew@alysha.tv",
      body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
    },
    {
      postId: 1,
      id: 5,
      name: "vero eaque aliquid doloribus et culpa",
      email: "Hayden@althea.biz",
      body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
    },
    {
      postId: 2,
      id: 6,
      name: "et fugit eligendi deleniti quidem qui sint nihil autem",
      email: "Presley.Mueller@myrl.com",
      body: "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in",
    },
    {
      postId: 2,
      id: 7,
      name: "repellat consequatur praesentium vel minus molestias voluptatum",
      email: "Dallas@ole.me",
      body: "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor",
    },
    {
      postId: 2,
      id: 8,
      name: "et omnis dolorem",
      email: "Mallory_Kunze@marie.org",
      body: "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque",
    },
    {
      postId: 2,
      id: 9,
      name: "provident id voluptas",
      email: "Meghan_Littel@rene.us",
      body: "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus",
    },
    {
      postId: 2,
      id: 10,
      name: "eaque et deleniti atque tenetur ut quo ut",
      email: "Carmen_Keeling@caroline.name",
      body: "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis",
    },
  ];

  return (
    <div className="container m-0 p-0 ">
      <div className="main_div py-md-5 py-2 ">
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-11 col-lg-8 col-xl-7">
            <div className="row d-flex justify-content-between align-items-center search my-2 shadow">
              <div className="col-8 col-lg-10 p-0 ps-2">
                <AppInput
                  placeholder="Enter Something"
                  value={inputValue}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-4 col-lg-2 text-end p-0">
                <AppButton label="Click Me" onClick={handleButtonClick} />
              </div>
            </div>
          </div>
          <div className="col-11 col-lg-4 col-xl-5 d-flex justify-content-between align-items-center flex-column mt-2 ">
            <AppSelect
              options={[
                { value: "1", label: "Iphone" },
                { value: "2", label: "Samsung" },
                { value: "3", label: "Vivo" },
                { value: "4", label: "Infinix" },
                { value: "5", label: "Oppo" },
                { value: "6", label: "Techno" },
              ]}
              value={selectedOption}
              onChange={handleSelectChange}
            />
          </div>
        </div>
        <div className="row d-flex  justify-content-center align-items-center py-5 ">
          <div className="col-11 col-lg-8 mt-3 ">
            <AppTable
              label="Testing data"
              cols={[
                {
                  heading: "Id",
                  key: "id",
                },
                {
                  heading: "Email",
                  key: "email",
                },
                {
                  heading: "Description",
                  key: "name",
                },
              ]}
              datasourse={data}
            />
          </div>
          <div className="col-11 col-lg-4 mt-3 d-flex justify-content-between align-items-center flex-column">
            <AppCard
              title="Create Stunning AI Art"
              content="Create amazing artworks in seconds using the power of Artificial Intelligence, participate in AI Art Challenges, chat with AI Art enthusiasts, and more. Try an art generator now!"
              Image="https://images.nightcafe.studio//assets/tdraw-girl.jpg?tr=w-1200,c-at_max"
            />
          </div>
        </div>
      </div>
    </div>
    // <div className="App">
    //   <AppTable
    //     label="Testing data"
    //     cols={[
    //       {
    //         heading: "Id",
    //         key: "id",
    //       },
    //       {
    //         heading: "Title",
    //         key: "title",
    //       },
    //       {
    //         heading: "Complete Status",
    //         key: "completed",
    //       },
    //     ]}
    //     datasourse={data}
    //   />
    // </div>
  );
}

export default App;
