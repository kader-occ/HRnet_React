import React, { useMemo, useState } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import { useSelector } from "react-redux";
import { Table, Card, InputGroup, FormControl, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const ListEmployeeScreen = () => {
  const employees = useSelector((state) => state.employees.employees);

  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 10;

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
      data: employees || [],
    },
    useGlobalFilter,
    useSortBy
  );

  const startRow = currentPage * rowsPerPage;
  const endRow = startRow + rowsPerPage;
  const paginatedRows = rows.slice(startRow, endRow);

  const totalPages = Math.ceil(rows.length / rowsPerPage);

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

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
            <>
              <Table striped bordered hover responsive {...getTableProps()}>
                <thead>
                  {headerGroups.map((headerGroup) => {
                    const { key: headerKey, ...headerGroupProps } =
                      headerGroup.getHeaderGroupProps();
                    return (
                      <tr key={headerKey} {...headerGroupProps}>
                        {headerGroup.headers.map((column) => {
                          const { key: columnKey, ...columnProps } =
                            column.getHeaderProps(
                              column.getSortByToggleProps()
                            );
                          return (
                            <th key={columnKey} {...columnProps}>
                              {column.render("Header")}
                              <span>
                                {column.isSorted
                                  ? column.isSortedDesc
                                    ? " 🔽"
                                    : " 🔼"
                                  : ""}
                              </span>
                            </th>
                          );
                        })}
                      </tr>
                    );
                  })}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {paginatedRows.map((row) => {
                    prepareRow(row);
                    const { key: rowKey, ...rowProps } = row.getRowProps();
                    return (
                      <tr key={rowKey} {...rowProps}>
                        {row.cells.map((cell) => {
                          const { key: cellKey, ...cellProps } =
                            cell.getCellProps();
                          return (
                            <td key={cellKey} {...cellProps}>
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <Button
                  variant="secondary"
                  onClick={goToPreviousPage}
                  disabled={currentPage === 0}
                >
                  Previous
                </Button>
                <span>
                  Page {currentPage + 1} of {totalPages}
                </span>
                <Button
                  variant="secondary"
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages - 1}
                >
                  Next
                </Button>
              </div>
            </>
          ) : (
            <p className="text-center">No employees found.</p>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default ListEmployeeScreen;
