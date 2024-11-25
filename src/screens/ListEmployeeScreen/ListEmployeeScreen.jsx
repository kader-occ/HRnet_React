import React, { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import { useSelector } from "react-redux";
import { Table, Card, InputGroup, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const ListEmployeeScreen = () => {
  const employees = useSelector((state) => state.employees.employees);

  const columns = useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Date of Birth",
        accessor: "dateOfBirth",
      },
      {
        Header: "Start Date",
        accessor: "startDate",
      },
      {
        Header: "Department",
        accessor: "department",
      },
      {
        Header: "Street",
        accessor: "street",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "Zip Code",
        accessor: "zipCode",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { globalFilter },
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data: employees,
    },
    useGlobalFilter,
    useSortBy
  );

  return (
    <>
      <Card>
        <Card.Title className="text-center p-3 bg-dark text-white">
          Employee List
        </Card.Title>
        <Card.Body>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search by name, department, or city"
              value={globalFilter || ""}
              onChange={(e) => setGlobalFilter(e.target.value)}
            />
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>
          </InputGroup>
          {employees.length > 0 ? (
            <Table striped bordered hover responsive {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        {column.render("Header")}
                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? " 🔽"
                              : " 🔼"
                            : ""}
                        </span>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          ) : (
            <p className="text-center">No employees found.</p>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default ListEmployeeScreen;
