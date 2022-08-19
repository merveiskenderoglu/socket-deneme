import { JobList } from "./components/JobList";
import { useEffect } from "react";
import { init,subscribe } from "./SocketApi";
import { useState } from "react";


function App() {
  const [jobs, SetJobs] = useState([]);

  useEffect(() => {
    init();
    console.log("init");
    subscribe((arg) => {
      SetJobs(arg);
    });
},[]);

console.log(jobs);

  return (
    <div style = {{display: "flex", flexDirection : "column", alignItems : "center", justifyContent: "center"}}>
     {jobs.map((item) => <JobList 
     key = {item._id} 
     jobStatus = {item.job_status} 
     ActionName0 = {item.task_list[0].ActionName} 
     LocationId0 = {item.task_list[0].LocationId}
     ActionName1 = {item.task_list[1].ActionName} 
     LocationId1 = {item.task_list[1].LocationId}
     id = {item._id}
     />)}

    </div>
  );
}

export default App;
