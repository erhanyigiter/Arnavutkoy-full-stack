
import {Table} from 'reactstrap';
function Dashboard(data){
    return (
    <div>
        <h2>Dashboard</h2>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
            </thead>
            {data.members.map((member, index) => (
                <tr key={index}>
                    <td>{member.name}</td>
                    <td>{member.email}</td>
                    <td>{member.role}</td>
                </tr>
            ))}
    
        </Table>
        </div>
    );
        
}
export default Dashboard;
