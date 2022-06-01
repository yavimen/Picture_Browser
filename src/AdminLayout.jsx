import axios from "axios";
import React, {useState} from "react";
import AdminNavBar from "./Components/AdminNavBar/AdminNavBar";
import './App.css'
import SearchImage from "./Components/SearchComponent/SearchImage";
import AdminImageBoard from "./Components/AdminImageBoard/AdminImageBoard";
function AdminLayout() {
    const [dataget, setDataGet] = useState(true);
    const [imageList, setImageList] = useState(null);
    const [searchState, setSearchState] = useState("");
    async function Data() {
        const responce = await axios.get('https://localhost:5001/images');
        dataget?setImageList(responce.data.data):console.log();
        setDataGet(false);
        console.log(imageList);
    }
    function SetNewData(newdata)
    {
        setImageList(newdata);
    }
    Data();
    return (
      <div className="userview">
          <AdminNavBar/>
          <SearchImage searchLine={searchState} setSearchLine={setSearchState}/>
          <div className="image-grid">
              {searchState===''?imageList?.map((image)=><AdminImageBoard 
               setNewList={SetNewData} image={image} key={image.id}/>):
              imageList.filter(
                  image=>(image.name+"").toLowerCase().includes(searchState.toLowerCase())
                ||(image.themes+"").toLowerCase().includes(searchState.toLowerCase()))
                .map((image)=><AdminImageBoard setNewList={SetNewData}  image={image} key={image.id}/>)}
          </div>
      </div>
    );
  }

  export default AdminLayout;