
import React, { useState, useCallback, useMemo } from "react";
import { AgGridReact } from 'ag-grid-react';


import usersTemp from "../data/users";
import shiftsTemp from "../data/shifts";
import busesTemp from "../data/buses";

export const UsersTable = () => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '593px', width: '100%' }), []);
  const [rowData, setRowData] = useState(); 
  const [columnDefs, setColumnDefs] = useState([
    { headerCheckboxSelection: true, checkboxSelection: true, headerName: "User #", field: "userNumber",      resizable: false, filter: true, sortable: true, flex: 1, minWidth: 150 },
    { headerName: "Full Name",    field: "fullName",    resizable: false, filter: true, sortable: true, flex: 1, minWidth: 200 },
    { headerName: "Role", field: "role", resizable: false, filter: true, sortable: true, flex: 1, minWidth: 200 },
    { headerName: "Last Updated", field: "lastUpdated", resizable: false, filter: true, sortable: true, flex: 1, minWidth: 200 },
    { headerName: "Status", field: "status", resizable: false, filter: true, sortable: true, flex: 1, minWidth: 200 },
    { headerName: "Shift #", field: "shiftNumber", resizable: false, filter: true, sortable: true, flex: 1, minWidth: 200 },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
      resizable: true,
    };
  }, []);

  // TO DO: implement API
  const onGridReady = useCallback((params) => {
    // fetch(`API_URL/users`) 
    //   .then((res) => res.json())
    //   .then((users) => {
    //       setRowData(users)
    //   })
    //   .catch((err) => {
    //       console.log(err.message)
    // })
    setRowData(usersTemp);
}, []);

  return (
    <div className="d-flex flex-row" style={containerStyle}>
      <div className="ag-theme-material" style={gridStyle}>
        <AgGridReact
          rowData={rowData}  
          columnDefs={columnDefs}  
          defaultColDef={defaultColDef}
          rowSelection={'multiple'}
          rowMultiSelectWithClick={true}
          onGridReady={onGridReady}
          paginationPageSize={10}
          pagination={true}
        ></AgGridReact>
      </div>
    </div>
  );
};

export const ShiftsTable = () => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '593px', width: '100%' }), []);
  const [rowData, setRowData] = useState(); 
  const [columnDefs, setColumnDefs] = useState([
    { headerCheckboxSelection: true, checkboxSelection: true, headerName: "Shift #",      field: "shiftNumber",      resizable: false, filter: true, sortable: true, flex: 1, minWidth: 150 },
    { headerName: "Driver",    field: "driverName",    resizable: false, filter: true, sortable: true, flex: 1, minWidth: 200 },
    { headerName: "Start", field: "startTime", resizable: false, filter: true, sortable: true, flex: 1, minWidth: 200 },
    { headerName: "End", field: "endTime", resizable: false, filter: true, sortable: true, flex: 1, minWidth: 200 },
    { headerName: "Required Type", field: "reqType", resizable: false, filter: true, sortable: true, flex: 1, minWidth: 200 },
    { headerName: "Bus #", field: "busNumber", resizable: false, filter: true, sortable: true, flex: 1, minWidth: 150 },
    { headerName: "Bay #", field: "bayNumber", resizable: false, filter: true, sortable: true, flex: 1, minWidth: 150 },
    { headerName: "Status", field: "status", resizable: false, filter: true, sortable: true, flex: 1, minWidth: 200 },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
      resizable: true,
    };
  }, []);

  // TO DO: implement API
  const onGridReady = useCallback((params) => {
    // fetch(`API_URL/users`) 
    //   .then((res) => res.json())
    //   .then((users) => {
    //       setRowData(users)
    //   })
    //   .catch((err) => {
    //       console.log(err.message)
    // })
    setRowData(shiftsTemp);
}, []);

  return (
    <div className="d-flex flex-row" style={containerStyle}>
      <div className="ag-theme-material" style={gridStyle}>
        <AgGridReact
          rowData={rowData}  
          columnDefs={columnDefs}  
          defaultColDef={defaultColDef}
          rowSelection={'multiple'}
          rowMultiSelectWithClick={true}
          onGridReady={onGridReady}
          paginationPageSize={10}
          pagination={true}
        ></AgGridReact>
      </div>
    </div>
  );
};

export const BusesTable = () => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '593px', width: '100%' }), []);
  const [rowData, setRowData] = useState(); 
  const [columnDefs, setColumnDefs] = useState([
    { headerCheckboxSelection: true, checkboxSelection: true, headerName: "Bus #",      field: "busNumber",      resizable: false, filter: true, sortable: true, flex: 1, minWidth: 150 },
    { headerName: "Bus Type",    field: "busType",    resizable: false, filter: true, sortable: true, flex: 1, minWidth: 200 },
    { headerName: "Bay #", field: "bayNumber", resizable: false, filter: true, sortable: true, flex: 1, minWidth: 200 },
    { headerName: "Status", field: "status", resizable: false, filter: true, sortable: true, flex: 1, minWidth: 200 },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
      resizable: true,
    };
  }, []);

  // TO DO: implement API
  const onGridReady = useCallback((params) => {
    // fetch(`API_URL/users`) 
    //   .then((res) => res.json())
    //   .then((users) => {
    //       setRowData(users)
    //   })
    //   .catch((err) => {
    //       console.log(err.message)
    // })
    setRowData(busesTemp);
  }, []);

  return (
    <div className="d-flex flex-row" style={containerStyle}>
      <div className="ag-theme-material" style={gridStyle}>
        <AgGridReact
          rowData={rowData}  
          columnDefs={columnDefs}  
          defaultColDef={defaultColDef}
          rowSelection={'multiple'}
          rowMultiSelectWithClick={true}
          onGridReady={onGridReady}
          paginationPageSize={10}
          pagination={true}
        ></AgGridReact>
      </div>
    </div>
  );
};

export const BayBusesTable = () => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '593px', width: '100%' }), []);
  const [rowData, setRowData] = useState(); 
  const [columnDefs, setColumnDefs] = useState([
    { rowDrag: true, headerName: "Bus #", field: "busNumber", resizable: false, filter: true, sortable: true, flex: 1, minWidth: 150 },
    { headerName: "Bus Type",    field: "busType",    resizable: false, filter: true, sortable: true, flex: 1, minWidth: 200 },
    { headerName: "Bay #", field: "bayNumber", resizable: false, filter: true, sortable: true, flex: 1, minWidth: 200 },
    { headerName: "Status", field: "status", resizable: false, filter: true, sortable: true, flex: 1, minWidth: 200 },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
      resizable: true,
    };
  }, []);

  // TO DO: implement API
  const onGridReady = useCallback((params) => {
    // fetch(`API_URL/users`) 
    //   .then((res) => res.json())
    //   .then((users) => {
    //       setRowData(users)
    //   })
    //   .catch((err) => {
    //       console.log(err.message)
    // })
    addDropZones(params);
    setRowData(busesTemp);
  }, []);

  function addDropZones(params) {
    var tileContainer = document.querySelector('.tile-container');
    var dropZone = {
      getContainer: () => {
        return tileContainer;
      },
      onDragStop: (params) => {
        var tile = createTile(params.node.data);
        tileContainer.appendChild(tile);
      },
    };
  
    params.api.addRowDropZone(dropZone);
  }

  function createTile(data) {
    var el = document.createElement('div');
  
    el.classList.add('tile');
    el.innerHTML =
      '<div class="busNumber">' +
      'bus ' + data.busNumber +
      '</div>' +
      '<div class="busType">' +
      'type ' + data.busType +
      '</div>';
  
    return el;
  }

  return (
    <div className="d-flex flex-row" style={containerStyle}>
      <div className="ag-theme-material" style={gridStyle}>
        <AgGridReact
          rowData={rowData}
          suppressMoveWhenRowDragging={true}  
          columnDefs={columnDefs}  
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
          paginationPageSize={10}
          pagination={true}
        ></AgGridReact>
      </div>
    </div>
  );
};