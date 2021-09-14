import { FormEvent, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  paper: {
    position: "absolute",
    left: 300,
    top: 300,
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "PLN",
    label: "ZŁ",
  },
];

interface Invoice {
  buyer: string;
  supplier: string;
  invoice: string;
  invoice_date: string;
  invoice_due: string;
  currency: string;
  netto: number;
  brutto: number;
}

const Add = (props: any) => {
  const classes = useStyles();

  const [currency, setCurrency] = useState("EUR");
  const [invoice, setInvoice] = useState<Invoice>({
    buyer: "Buyer name",
    supplier: "Supplier Name",
    invoice: "",
    invoice_date: "11.09.2021",
    invoice_due: "11.09.2021",
    currency: "EUR",
    netto: 0,
    brutto: 0,
  });

  const [valid, setValid] = useState(3);

  const [open, setOpen] = useState(false);

  const handleChange = (event: any) => {
    setCurrency(event.target.value);

    setInvoice({
      ...invoice,
      currency: event.target.value,
    });
    setValid(valid + 1);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(invoice);
    if (valid > 7)
      axios
        .post(
          "https://webapplication120210915002008.azurewebsites.net/api/invoice",
          invoice
        )
        .then((res) => console.log(res))
        .catch((res) => console.log(res));
    else handleOpen();
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div>
        <br />
        <TextField
          required
          id="standard-required"
          label="Buyer"
          defaultValue="Buyer name"
          onChange={(e: any) => {
            setInvoice({
              ...invoice,
              buyer: e.target.value,
            });
            setValid(valid + 1);
          }}
        />
        <br />
        <TextField
          required
          id="standard-required"
          label="Supplier"
          defaultValue="Supplier Name"
          onChange={(e: any) => {
            setInvoice({
              ...invoice,
              supplier: e.target.value,
            });
            setValid(valid + 1);
          }}
        />
        <br />
        <TextField
          required
          id="standard-required"
          label="Invoice Number"
          defaultValue=""
          onChange={(e: any) => {
            setInvoice({
              ...invoice,
              invoice: e.target.value,
            });
            setValid(valid + 1);
          }}
        />
        <br />
        <TextField
          id="date"
          label="Invoice Date"
          type="date"
          defaultValue="2021-09-11"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e: any) => {
            setInvoice({
              ...invoice,
              invoice_date: e.target.value,
            });
            setValid(valid + 1);
          }}
        />
        <br />
        <TextField
          id="date"
          label="Due Date"
          type="date"
          defaultValue="2021-09-11"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e: any) => {
            setInvoice({
              ...invoice,
              invoice_due: e.target.value,
            });
            setValid(valid + 1);
          }}
        />
        <br />

        <TextField
          id="standard-select-currency-native"
          select
          label="Currency"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <br />

        <TextField
          type="number"
          required
          id="standard-required"
          label="Netto Amount"
          onChange={(e: any) => {
            setInvoice({
              ...invoice,
              netto: e.target.value,
            });
            setValid(valid + 1);
          }}
        />

        <br />

        <TextField
          type="number"
          required
          id="standard-required"
          label="Brutto Amount"
          onChange={(e: any) => {
            setInvoice({
              ...invoice,
              brutto: e.target.value,
            });
            setValid(valid + 1);
          }}
        />
      </div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disableElevation
      >
        DODAJ
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <h2 id="simple-modal-title">Fill all the boxes!</h2>
          <p id="simple-modal-description"></p>
        </div>
      </Modal>
    </form>
  );
};
export default Add;
