import React,{useEffect,useState} from 'react'
import axios from 'axios'
import _ from "lodash";

const Paginate = () => {
    const [state, setstate] = useState([]);  // storing the data 
    const [noOfPages,setnoOfPages]=useState([]);  //  --->
    const [limit,setLimit]=useState(3);
    const [page,setPage]=useState(0);

    useEffect(() => {
axios.post("http://localhost:8080/api/employee/getAll",{limit:limit,page:page}).then(data=>{
    setstate(data["data"].data);
    //setTotalCount(data["data"].totalCount)
    console.log(Math.ceil(parseInt(data["data"].totalCount)/limit))
    setnoOfPages([..._.range(Math.ceil(parseInt(data["data"].totalCount)/limit))]);

}).catch(err=>{
    console.log(err);
})

    
    }, [page])


const paginateData=(page)=>{
    setPage(page);

}


    return (
        <div>

            {
                state.map(ele=>(
                    <li>
                        {ele.name}
                    </li>
                ))
            }
            
            <div className="pagination">
                {
                  noOfPages.map(ele=>(
                    <a href="#" onClick={()=>paginateData(ele)}>{ele+1}</a>
                  ))

                }

 

 
</div>
        </div>
    )
}

export default Paginate
