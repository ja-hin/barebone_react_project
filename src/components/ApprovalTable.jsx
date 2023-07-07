const ApprovalTable = ({ data }) => {
  return (
    <div
      id="table-bucket-you-own"
      style={{
        backgroundColor: "white",
        width: "95%",
        height: "20vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "1px solid black",
        borderRadius: "2px",
      }}
    >
      <div>
        <h3>Approval assigned to you</h3>
      </div>
      <div
        style={{
          width: "100%",
          height: "50px",
          borderColor: "black",
          borderStyle: "solid",
          borderWidth: 0,
          borderBottomWidth: "2px",
          borderTopWidth: "2px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            flex: "1",
          }}
        >
          {" "}
          Bucket Name
        </div>
        <div
          style={{
            flex: "1",
          }}
        >
          {" "}
          Current Budget
        </div>
        <div
          style={{
            flex: "1",
          }}
        >
          {" "}
          Requested Budget
        </div>
        <div
          style={{
            flex: "1",
          }}
        >
          {" "}
          Requested By
        </div>
        <div
          style={{
            flex: "1",
          }}
        >
          {" "}
        </div>
      </div>
      {data.map((item) => {
        return (
          <div
            key={item.name}
            style={{
              backgroundColor: "white",
              width: "100%",
              height: "50px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                flex: "1",
              }}
            >
              {item.name}
            </div>
            <div
              style={{
                flex: "1",
              }}
            >
              {item.Currentbudget}
            </div>
            <div
              style={{
                flex: "1",
              }}
            >
              {item.RequestedBudget}
            </div>
            <div
              style={{
                flex: "1",
              }}
            >
              {item.RequestedBy}
            </div>
            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "row",
                gap: "10px",
              }}
            >
              <button>Approve</button>
              <button>reject</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ApprovalTable;
