import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const Main = (props: any) => {
  return (
    <div
      style={{
        marginTop: "10px",
      }}
    >
      <Link href="/explore">
        <Button
          variant="contained"
          color="primary"
          disableElevation
          style={{ margin: "3px" }}
        >
          PRZEGLĄDAJ
        </Button>
      </Link>

      <Link href="/add">
        <Button
          variant="contained"
          color="primary"
          disableElevation
          style={{ margin: "3px" }}
        >
          DODAJ FAKTURĘ
        </Button>
      </Link>
    </div>
  );
};
export default Main;
