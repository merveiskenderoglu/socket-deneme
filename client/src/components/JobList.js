
export const JobList = ({jobStatus , ActionName0, LocationId0 , ActionName1, LocationId1, id}) => {
   
  
  return (
    <div style = {{display:"flex", flexDirection : "column"}}>
     <div>
      <h2>Task List</h2>
          <h3 style = {{color: "red"}}>{id}</h3>
          <ul>
            <h4>Task List 0</h4>
            <li>{ActionName0}</li>
            <li>{LocationId0}</li>
            <h4>Task List 1</h4>
            <li>{ActionName1}</li>
            <li>{LocationId1}</li>
          <br />
            <li>{jobStatus}</li>
          </ul>      
    </div>    
    </div>
  )
}
