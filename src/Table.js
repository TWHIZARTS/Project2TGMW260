import TableRow from "./TableRow"
import './Table.css'


function Table(props)
{

  return( 
    
    <table>
    
    <thead>
        <tr>
            <th>Project Title</th>
            <th>Institution</th>
            <th>State</th>
            <th>Primary Discipline</th>
            <th>Program</th>
            <th>Original Amount</th>
            <th>Participant Count</th>
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