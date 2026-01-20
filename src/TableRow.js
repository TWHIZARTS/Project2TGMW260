
function TableRow(props)
{


return(
<>
    <tr>
        <td>{props.fullgrant.ProjectTitle}</td>
        <td>{props.fullgrant.Institution}</td>

{/* At least five more columns: */}
        
        <td>{props.fullgrant.InstState}</td>
        <td>{props.fullgrant.PrimaryDiscipline}</td>
        <td>{props.fullgrant.Program}</td>     
        <td>{props.fullgrant.OriginalAmount}</td>
        <td>{props.fullgrant.ParticipantCount}</td>     


    </tr>

    
</>
  )
  
}


export default TableRow