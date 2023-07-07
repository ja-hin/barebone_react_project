import ApprovalTable from "./components/ApprovalTable";
import Cards from "./components/Cards";
import SideNav from "./components/SideNav";
import TableBucket from "./components/TableBucket";

function App() {
  const cardData = [
    {
      amount: "$400,000.",
      title: "Total Budget you own",
      color: "white"
    },
    {
      amount: "$299,000",
      title: "Spent month to date",
      color:"#92c1f7"
    },
    {
      amount: "$378,000",
      title: "Forecasted till month end",
      color:"#6dd6a9"
    },
  ];
  const BucketTableData = [
    {
      name: "Amce Corp",
      budget: "$100,000",
      spend: "$50,000",
      forecast: "$100,000",
    },
    {
      name: "Raman Inc",
      budget: "$134,000",
      spend: "$50,230",
      forecast: "$90,000",
    },
  ];
  const OwnedBucketData = [
    {
      name: "Longate Corp",
      budget: "$100,000",
      spend: "$50,000",
      forecast: "$100,000",
    },
  ];
  const ApprovalData = [
    {
      name: "ACME Corp",
      Currentbudget: "$100,000",
      RequestedBudget: "$50,000",
      RequestedBy: "Joe Hilfinger",
    },
  ];
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <SideNav />
        <main
          style={{
            width: "90%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft:'20px'
          }}
        >
          <div style={{display:'flex', width:"100%"}}>
            
          <article
            id="user-name"
            style={{
              paddingTop:'10px',
              width: "100%",
              height: "8vh",
              fontSize: "30px",
              fontWeight: "bold",
              display:"flex",
              flexDirection:"row",
              justifyContent:"flex-start",
              textAlign:"start"
            
            }}
          >
            Hi, Jennier Moss
          </article>
          <article style={{display:"flex",
              justifyContent:"flex-end", width:"50%"}}> Last scanned on July 07th, 2023 11.30 PM IST</article>
          </div>
          <Cards data={cardData} />
          <TableBucket title={"Bucket you own"} data={BucketTableData} />
          <ApprovalTable data={ApprovalData} />
          <TableBucket
            title={"Bucket you are member of"}
            data={OwnedBucketData}
          />
        </main>
      </div>
    </>
  );
}

export default App;
