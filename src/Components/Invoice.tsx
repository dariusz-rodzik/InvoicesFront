import { IInvoiceData } from "../types/global";

import * as Styles from "./Invoice.styled";

const Invoice = ({ props }: { props: IInvoiceData }) => {
  return (
    <Styles.Invoice>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          height: "46px",
          marginTop: "-7px",
          marginBottom: "5px",
        }}
      >
        <p
          style={{
            width: "100%",

            fontWeight: "bold",
            fontSize: "22px",
          }}
        >
          Invoice Number {props.invoice}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          height: "46px",
        }}
      >
        <p
          style={{
            width: "40%",

            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          Buyer
        </p>
        <p style={{ width: "40%" }}>{props.buyer}</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          height: "46px",
        }}
      >
        <p
          style={{
            width: "40%",

            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          Supplier
        </p>
        <p style={{ width: "40%" }}>{props.supplier}</p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          height: "46px",
        }}
      >
        <p
          style={{
            width: "40%",

            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          invoice_date
        </p>
        <p style={{ width: "40%" }}>{props.invoice_date.split("T")[0]}</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          height: "46px",
        }}
      >
        <p
          style={{
            width: "40%",

            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          invoice_due
        </p>
        <p style={{ width: "40%" }}>{props.invoice_due.split("T")[0]}</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          height: "46px",
        }}
      >
        <p
          style={{
            width: "40%",

            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          currency
        </p>
        <p style={{ width: "40%" }}>{props.currency}</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          height: "46px",
        }}
      >
        <p
          style={{
            width: "40%",

            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          netto
        </p>
        <p style={{ width: "40%" }}>{props.netto}</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          height: "46px",
        }}
      >
        <p
          style={{
            width: "40%",

            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          brutto
        </p>
        <p style={{ width: "40%" }}>{props.brutto}</p>
      </div>
    </Styles.Invoice>
  );
};

export default Invoice;
