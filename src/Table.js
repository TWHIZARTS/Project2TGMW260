import TableRow from "./TableRow"

function Table(props)
{

  return( 
    
    <table>
    
    <thead>
        <tr>
            <td>Project Title</td>
            <td>Institution</td>

            <td>State</td>
            <td>Primary Discipline</td>
            <td>Program</td>
            <td>Original Amount</td>
            <td>Participant Count</td>
        </tr>
    </thead>

    <tbody>
    
    
        {props.data.map(grant => 

            <TableRow fullgrant={grant}>
            {

            }
            </TableRow>
        
        )}
        

       
    </tbody>
      
    </table>
  )
}

export default Table