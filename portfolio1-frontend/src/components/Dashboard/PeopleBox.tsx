
import TableBox from "../TableBox"; 

const columns = [
  'Name','Type', 'Size', 'Date Modified', 'Owner'
];

const rows: Record<string, string>[] = [
  { Name: 'Document1.txt', Type: 'Text File', Size: '15 KB', 'Date Modified': '2024-06-01', Owner: 'Alice' },
  { Name: 'Image.png', Type: 'Image', Size: '2 MB', 'Date Modified': '2024-05-28', Owner: 'Bob' },
  { Name: 'Presentation.pptx', Type: 'Presentation', Size: '5 MB', 'Date Modified': '2024-05-20', Owner: 'Charlie' },
  { Name: 'Archive.zip', Type: 'Archive', Size: '500 KB', 'Date Modified': '2024-05-15', Owner: 'Dana' },
  { Name: 'Script.js', Type: 'JavaScript File', Size: '8 KB', 'Date Modified': '2024-05-10', Owner: 'Eve' },
  { Name: 'Script.js', Type: 'JavaScript File', Size: '8 KB', 'Date Modified': '2024-05-10', Owner: 'Eve' },
  { Name: 'Script.js', Type: 'JavaScript File', Size: '8 KB', 'Date Modified': '2024-05-10', Owner: 'Eve' },
  { Name: 'Script.js', Type: 'JavaScript File', Size: '8 KB', 'Date Modified': '2024-05-10', Owner: 'Eve' },
  { Name: 'Script.js', Type: 'JavaScript File', Size: '8 KB', 'Date Modified': '2024-05-10', Owner: 'Eve' },
  { Name: 'Script.js', Type: 'JavaScript File', Size: '8 KB', 'Date Modified': '2024-05-10', Owner: 'Eve' },
  { Name: 'Script.js', Type: 'JavaScript File', Size: '8 KB', 'Date Modified': '2024-05-10', Owner: 'Eve' },
  { Name: 'Script.js', Type: 'JavaScript File', Size: '8 KB', 'Date Modified': '2024-05-10', Owner: 'Eve' },
  { Name: 'Script.js', Type: 'JavaScript File', Size: '8 KB', 'Date Modified': '2024-05-10', Owner: 'Eve' },
  { Name: 'Script.js', Type: 'JavaScript File', Size: '8 KB', 'Date Modified': '2024-05-10', Owner: 'Eve' },
  { Name: 'Script.js', Type: 'JavaScript File', Size: '8 KB', 'Date Modified': '2024-05-10', Owner: 'Eve' },
  { Name: 'Script.js', Type: 'JavaScript File', Size: '8 KB', 'Date Modified': '2024-05-10', Owner: 'Eve' },
  { Name: 'Script.js', Type: 'JavaScript File', Size: '8 KB', 'Date Modified': '2024-05-10', Owner: 'Eve' },
  { Name: 'Script.js', Type: 'JavaScript File', Size: '8 KB', 'Date Modified': '2024-05-10', Owner: 'Eve' },
  { Name: 'Script.js', Type: 'JavaScript File', Size: '8 KB', 'Date Modified': '2024-05-10', Owner: 'Eve' },
  { Name: 'Script.js', Type: 'JavaScript File', Size: '8 KB', 'Date Modified': '2024-05-10', Owner: 'Eve' },
  { Name: 'Script.js', Type: 'JavaScript File', Size: '8 KB', 'Date Modified': '2024-05-10', Owner: 'Eve' },
];

const PeopleBox = () =>{
    return(
    <TableBox columns={columns} rows={rows} />
    )
}
export default PeopleBox;