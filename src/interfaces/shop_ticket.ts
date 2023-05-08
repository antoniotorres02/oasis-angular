interface Shop_ticket {
  ticketId: string;
  shopId: string;
  subject: string;
  content: string;
  status: Status;
}

enum Status {
  archived,
  pending,
  answered,
  closed
}
