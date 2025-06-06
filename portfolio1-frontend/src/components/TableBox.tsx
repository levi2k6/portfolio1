import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

type TableBoxProps = {
  columns: string[];
  rows: Record<string, string>[];
};

const TableBox = ({ columns, rows }: TableBoxProps) => (
    <TableContainer sx={{ maxHeight: '100vh', width: '100%' }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={col} align="center" sx={{ fontWeight: 700 }}>
                {col}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={idx}>
              {columns.map((col) => (
                <TableCell key={col} align="center">
                  {row[col]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
);

export default TableBox;
