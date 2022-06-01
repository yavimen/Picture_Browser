import axios from "axios";
import React, {useState} from "react";
import UserNavBar from "./Components/UserNavBar/UserNavBar"
import './App.css'
import UserImageBoard from "./Components/ImageBoard/UserImageBoard";
import SearchImage from "./Components/SearchComponent/SearchImage";
function UserLayout() {
    const [dataget, setDataGet] = useState(true);
    const [imageList, setImageList] = useState(null);
    const [searchState, setSearchState] = useState("");
    async function Data() {
        const responce = await axios.get('https://localhost:5001/images');
        dataget?setImageList(responce.data.data):console.log();
        setDataGet(false);
        console.log(imageList);
    }
    Data();
    return (
      <div className="userview">
          <UserNavBar/>
          <SearchImage searchLine={searchState} setSearchLine={setSearchState}/>
          <div className="image-grid">
              {searchState===''?imageList?.map((image)=><UserImageBoard image={image} key={image.id}/>):
              imageList.filter(
                  image=>(image.name+"").toLowerCase().includes(searchState.toLowerCase())
                ||(image.themes+"").toLowerCase().includes(searchState.toLowerCase()))
                .map((image)=><UserImageBoard image={image} key={image.id}/>)}
          </div>
      </div>
    );
  }

  export default UserLayout;