const TableBucket = ({ title, data }) => {
  return (
    <div
      id="table-bucket-you-own"
      style={{
        backgroundColor: "white",
        width: "95%",
        height: "22vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "1px solid black",
        borderRadius: "2px",
      }}
    >
      <div>
        <h3>{title}</h3>
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "20px",
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
            flex: "6",
          }}
        >
          {" "}
          Name
        </div>
        <div
          style={{
            flex: "2",
          }}
        >
          {" "}
          Budget
        </div>
        <div
          style={{
            flex: "2",
          }}
        >
          {" "}
          Spend
        </div>
        <div
          style={{
            flex: "2",
          }}
        >
          {" "}
          Forecast
        </div>
      </div>
      {data?.map((item) => {
        return (
          <div
            key={item.name}
            style={{
              backgroundColor: "white",
              color:'blue',
              width: "100%",
              height: "20px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                flex: "6",
              }}
            >
              {" "}
              {item.name}
            </div>
            <div
              style={{
                flex: "2",
              }}
            >
              {" "}
              {item.budget}
            </div>
            <div
              style={{
                flex: "2",
              }}
            >
              {" "}
              {item.spend}
            </div>
            <div
              style={{
                flex: "2",
              }}
            >
              {" "}
              {item.forecast}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TableBucket;
