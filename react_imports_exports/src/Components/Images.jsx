import image1 from "../assets/big-data.png"
import img from "../assets/series.png"
import video1 from "../assets/sample-mp4-file-small.mp4"
import jsondata from "../assets/data.json"
export const Images = () =>{
    console.log(jsondata)

    return <div>
        images
        {/* first way importing images */}
        <img src={image1} alt="image1" />
        <img src={img} alt="image1" />

        {/* 2nd  way of importing images*/}
        <img src="deal_ofthe_week.png" alt=""/>
        {/* <img src="vite.svg"/> */}
        <video controls>
            <source src={video1}/>
        </video>

        <video controls>
            <source src="file_example_MOV_480_700kB.mov"/>
        </video>
        {/* 3rd way to import */}

      {jsondata.products.map((item,index) => <div>
        <p>tv name {item.title}</p>
        <h4>brand {item.brand}</h4>
      </div>)}

    </div>
}