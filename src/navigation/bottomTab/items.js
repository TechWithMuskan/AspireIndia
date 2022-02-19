import Home from "../../screens/Home";
import {
  Logo,
  LogoFocused,
  Card,
  CardFocused,
  Payments,
  PaymentsFocused,
  Credit,
  CreditFocused,
  Account,
  AccountFocused,
} from "../../theme/svgs";

export default [
  {
    name: "Home",
    focused: LogoFocused,
    unfocused: Logo,
    route: Home,
  },
  {
    name: "Debit Card",
    focused: CardFocused,
    unfocused: Card,
    route: Home,
  },
  {
    name: "Payments",
    focused: PaymentsFocused,
    unfocused: Payments,
    route: Home,
  },
  {
    name: "Credit",
    focused: CreditFocused,
    unfocused: Credit,
    route: Home,
  },
  {
    name: "Profile",
    focused: AccountFocused,
    unfocused: Account,
    route: Home,
  },
];
