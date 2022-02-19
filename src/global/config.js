import { Insight, Transfer, Freeze, NewCard, Deactivate } from "../theme/svgs";

export const serviceList = [
  {
    id: 1,
    title: "Top-up account",
    description: "Deposit money to your account to use with card",
    toggle: false,
    image: Insight,
  },
  {
    id: 2,
    title: "Weekly spending limit",
    description: "You haven’t set any spending limit on card",
    toggle: true,
    image: Transfer,
  },
  {
    id: 3,
    title: "Freeze card",
    description: "Your debit card is currently active",
    toggle: true,
    image: Freeze,
  },
  {
    id: 4,
    title: "Get a new card",
    description: "This deactivates your cureent debit card",
    toggle: false,
    image: NewCard,
  },
  {
    id: 5,
    title: "Deactivated cards",
    description: "Your previously deactivated cards",
    toggle: false,
    image: Deactivate,
  },
];

export const priceList = [
  {
    id: 1,
    price: "5,000",
  },
  {
    id: 2,
    price: "10,000",
  },
  {
    id: 3,
    price: "20,000",
  },
];
