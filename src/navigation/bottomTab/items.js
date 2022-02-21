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
    id: 1,
    name: "Home",
    focused: LogoFocused,
    unfocused: Logo,
    route: Home,
  },
  {
    id: 2,
    name: "Debit Card",
    focused: CardFocused,
    unfocused: Card,
    route: DebitCard,
  },
  {
    id: 3,
    name: "Payments",
    focused: PaymentsFocused,
    unfocused: Payments,
    route: Payment,
  },
  {
    id: 4,
    name: "Credit",
    focused: CreditFocused,
    unfocused: Credit,
    route: CreditCard,
  },
  {
    id: 5,
    name: "Profile",
    focused: AccountFocused,
    unfocused: Account,
    route: Profile,
  },
];
