import axios from "axios";

export default function fetchRequest(query, page = 1) {
  const x = axios.get(
    `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=Mu72MXAFZvQykVVURAQpcfIFtaRdsEaBG0D-DSbuZL0`
  );
  console.log(x);
  return x;
}
