import Home from "../../screens/Home";
import CreditCard from "../../screens/Credit";
import DebitCard from "../../screens/DebitCard";
import Payment from "../../screens/Payment";
import Profile from "../../screens/Profile";
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
    route: DebitCard,
  },
  {
    name: "Payments",
    focused: PaymentsFocused,
    unfocused: Payments,
    route: Payment,
  },
  {
    name: "Credit",
    focused: CreditFocused,
    unfocused: Credit,
    route: CreditCard,
  },
  {
    name: "Profile",
    focused: AccountFocused,
    unfocused: Account,
    route: Profile,
  },
];
